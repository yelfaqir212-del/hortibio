import { startTransition, useDeferredValue, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const filters = ['products', 'plants'];

const normalizeSearch = (value = '') =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

const getFieldScore = (field, query, weight) => {
  if (!field || !query) {
    return 0;
  }

  if (field === query) {
    return weight + 120;
  }

  if (field.startsWith(query)) {
    return weight + 90;
  }

  if (field.split(/\s+/).some((word) => word.startsWith(query))) {
    return weight + 65;
  }

  if (field.includes(query)) {
    return weight + 35;
  }

  return 0;
};

const getItemScore = (item, query, t) => {
  const title = normalizeSearch(t(`catalog.items.${item.id}.title`));
  const teaser = normalizeSearch(t(`catalog.items.${item.id}.teaser`));
  const summary = normalizeSearch(t(`catalog.items.${item.id}.summary`));
  const detail = normalizeSearch(t(`catalog.items.${item.id}.detail`));
  const metric = normalizeSearch(t(`catalog.items.${item.id}.metric`));
  const market = normalizeSearch(t(`catalog.items.${item.id}.market`));
  const format = normalizeSearch(t(`catalog.items.${item.id}.format`));

  return (
    getFieldScore(title, query, 140) +
    getFieldScore(teaser, query, 70) +
    getFieldScore(summary, query, 55) +
    getFieldScore(detail, query, 25) +
    getFieldScore(metric, query, 30) +
    getFieldScore(market, query, 35) +
    getFieldScore(format, query, 20)
  );
};

export function InteractiveCatalog({ items }) {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('products');
  const [activeId, setActiveId] = useState(null);
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = normalizeSearch(deferredQuery);

  const activeGroupLabel = t(`catalog.groups.${activeFilter}`);

  const scopedItems = useMemo(
    () => items.filter((item) => item.group === activeFilter),
    [activeFilter, items]
  );

  const filteredItems = useMemo(() => {
    if (!normalizedQuery) {
      return scopedItems;
    }

    return scopedItems
      .map((item) => ({
        item,
        score: getItemScore(item, normalizedQuery, t),
      }))
      .filter(({ score }) => score > 0)
      .sort((left, right) => right.score - left.score || Number(left.item.serial) - Number(right.item.serial))
      .map(({ item }) => item);
  }, [normalizedQuery, scopedItems, t]);

  const activeItem = filteredItems.find((item) => item.id === activeId) ?? null;

  useEffect(() => {
    if (activeId && !filteredItems.some((item) => item.id === activeId)) {
      setActiveId(null);
    }
  }, [activeId, filteredItems]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveId(null);
      }
    };

    if (activeItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [activeItem]);

  return (
    <LayoutGroup id="hortibio-catalog">
      <div className="catalog-toolbar">
        <div className="catalog-controls" role="tablist" aria-label={t('catalog.tabsLabel')}>
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                className={`filter-pill ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(filter);
                  setQuery('');
                }}
                role="tab"
                aria-selected={isActive}
                type="button"
              >
                {isActive ? <motion.span className="filter-highlight" layoutId="filter-highlight" /> : null}
                <span>{t(`catalog.filters.${filter}`)}</span>
              </button>
            );
          })}
        </div>

        <div className="catalog-search-shell">
          <label className="catalog-search-label" htmlFor="catalog-search">
            {t('catalog.search.label')}
          </label>

          <div className={`catalog-search ${query ? 'active' : ''}`}>
            <span className="catalog-search-icon" aria-hidden="true" />
            <input
              id="catalog-search"
              autoComplete="off"
              onChange={(event) => {
                const nextValue = event.target.value;
                startTransition(() => {
                  setQuery(nextValue);
                });
              }}
              placeholder={t('catalog.search.placeholder', { group: activeGroupLabel })}
              type="search"
              value={query}
            />
            {query ? (
              <button
                aria-label={t('catalog.search.clear')}
                className="catalog-search-clear"
                onClick={() => setQuery('')}
                type="button"
              >
                {t('catalog.search.clear')}
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="catalog-search-meta" aria-live="polite">
        <span className="catalog-search-live">
          <span className="catalog-search-dot" />
          {t('catalog.search.live')}
        </span>
        <strong>{t('catalog.search.results', { count: filteredItems.length, total: scopedItems.length, group: activeGroupLabel })}</strong>
      </div>

      {filteredItems.length ? (
        <div className="catalog-grid">
          {filteredItems.map((item, index) => (
            <motion.button
              key={item.id}
              className="catalog-card"
              layoutId={`catalog-card-${item.id}`}
              type="button"
              style={{ '--card-gradient': item.gradient }}
              onClick={() => setActiveId(item.id)}
              initial={{ opacity: 0, y: 42, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="card-orb" />
              <div className="card-head">
                <span className="card-type">{t(`catalog.groups.${item.group}`)}</span>
                <span className="card-serial">{item.serial}</span>
              </div>
              <div className="card-copy">
                <p className="card-metric">{t(`catalog.items.${item.id}.metric`)}</p>
                <h3>{t(`catalog.items.${item.id}.title`)}</h3>
                <p>{t(`catalog.items.${item.id}.teaser`)}</p>
              </div>
              <div className="card-foot">
                <span>{t(`catalog.items.${item.id}.market`)}</span>
                <span>{t('catalog.tap')}</span>
              </div>
            </motion.button>
          ))}
        </div>
      ) : (
        <motion.div
          className="catalog-empty"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="catalog-empty-label">{activeGroupLabel}</span>
          <h3>{t('catalog.search.emptyTitle')}</h3>
          <p>{t('catalog.search.emptyText', { query })}</p>
          <button className="button-secondary" onClick={() => setQuery('')} type="button">
            {t('catalog.search.reset')}
          </button>
        </motion.div>
      )}

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="catalog-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              className="catalog-modal"
              layoutId={`catalog-card-${activeItem.id}`}
              style={{ '--card-gradient': activeItem.gradient }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="modal-orb" />
              <div className="modal-head">
                <span className="modal-type">{t(`catalog.groups.${activeItem.group}`)}</span>
                <button
                  aria-label={t('catalog.close')}
                  className="modal-close"
                  onClick={() => setActiveId(null)}
                  type="button"
                >
                  <span />
                  <span />
                </button>
              </div>
              <div className="modal-body">
                <p className="modal-metric">{t(`catalog.items.${activeItem.id}.metric`)}</p>
                <h3>{t(`catalog.items.${activeItem.id}.title`)}</h3>
                <p className="modal-summary">{t(`catalog.items.${activeItem.id}.summary`)}</p>
                <div className="modal-chips">
                  <span>{t(`catalog.items.${activeItem.id}.market`)}</span>
                  <span>{t(`catalog.items.${activeItem.id}.format`)}</span>
                </div>
                <p className="modal-detail">{t(`catalog.items.${activeItem.id}.detail`)}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </LayoutGroup>
  );
}
