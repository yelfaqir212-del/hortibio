import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const catalogPdf = '/hortibio-catalog.pdf';
const pageCount = 19;

export function HortibioCatalog() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isTurning, setIsTurning] = useState(false);

  const pageUrl = useMemo(
    () => `${catalogPdf}#page=${page}&toolbar=0&navpanes=0&view=FitH`,
    [page]
  );

  useEffect(() => {
    if (!isTurning) return undefined;
    const timer = window.setTimeout(() => setIsTurning(false), 760);
    return () => window.clearTimeout(timer);
  }, [isTurning, page]);

  const turnTo = (nextPage) => {
    if (nextPage < 1 || nextPage > pageCount || nextPage === page) return;

    setDirection(nextPage > page ? 1 : -1);
    setIsTurning(true);
    window.setTimeout(() => setPage(nextPage), 250);
  };

  return (
    <div className="hortibio-catalog-section">
      <div className="hortibio-catalog-shell">
        <div className="hortibio-catalog-copy">
          <span className="section-eyebrow">{t('hortibioCatalog.eyebrow')}</span>
          <h2>{t('hortibioCatalog.title')}</h2>
          <p>{t('hortibioCatalog.lead')}</p>

          <div className="hortibio-catalog-actions">
            <a className="button-primary" href={catalogPdf} target="_blank" rel="noreferrer">
              {t('hortibioCatalog.openPdf')}
            </a>
            <a className="button-secondary catalog-download" href={catalogPdf} download>
              {t('hortibioCatalog.downloadPdf')}
            </a>
          </div>
        </div>

        <motion.div
          className={`grimoire ${isTurning ? 'is-turning' : ''}`}
          initial={{ opacity: 0, y: 36, rotateX: 4 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grimoire-spine" aria-hidden="true" />
          <div className="grimoire-topbar">
            <span>{t('hortibioCatalog.readerLabel')}</span>
            <strong>{t('hortibioCatalog.pageStatus', { page, total: pageCount })}</strong>
          </div>

          <div className="grimoire-stage">
            <iframe
              key={page}
              className="catalog-pdf-frame"
              src={pageUrl}
              title={t('hortibioCatalog.frameTitle')}
              loading="lazy"
            />

            <AnimatePresence>
              {isTurning ? (
                <motion.div
                  key={`${page}-${direction}`}
                  className={`turning-page ${direction > 0 ? 'next' : 'prev'}`}
                  initial={{ rotateY: direction > 0 ? 0 : -178, opacity: 0.95 }}
                  animate={{ rotateY: direction > 0 ? -178 : 0, opacity: [0.95, 1, 0.35] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.72, ease: [0.2, 0.82, 0.2, 1] }}
                >
                  <span />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="grimoire-controls">
            <button
              type="button"
              className="grimoire-arrow"
              onClick={() => turnTo(page - 1)}
              disabled={page === 1}
              aria-label={t('hortibioCatalog.previous')}
            >
              <span aria-hidden="true">{'<'}</span>
            </button>

            <div className="grimoire-progress" aria-hidden="true">
              <span style={{ width: `${(page / pageCount) * 100}%` }} />
            </div>

            <button
              type="button"
              className="grimoire-arrow"
              onClick={() => turnTo(page + 1)}
              disabled={page === pageCount}
              aria-label={t('hortibioCatalog.next')}
            >
              <span aria-hidden="true">{'>'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
