import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const catalogPdf = `${import.meta.env.BASE_URL}hortibio-catalog.pdf`;
const pageCount = 19;

export function HortibioCatalog() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isTurning, setIsTurning] = useState(false);
  const touchStartX = useRef(null);

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

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 48) return;
    turnTo(distance < 0 ? page + 1 : page - 1);
  };

  return (
    <div className="hortibio-catalog-section">
      <div className="hortibio-catalog-shell">
        <div className="hortibio-catalog-copy">
          <h2>{t('hortibioCatalog.title')}</h2>
          <a className="catalog-download-button" href={catalogPdf} download>
            {t('hortibioCatalog.downloadPdf')}
          </a>
        </div>

        <motion.div
          className={`ipad-catalog ${isTurning ? 'is-turning' : ''}`}
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ipad-camera" aria-hidden="true" />

          <div className="ipad-screen">
            <iframe
              key={page}
              className="catalog-pdf-frame"
              src={pageUrl}
              title={t('hortibioCatalog.frameTitle')}
              loading="lazy"
            />
            <div
              className="catalog-swipe-layer"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              aria-hidden="true"
            />

            <AnimatePresence>
              {isTurning ? (
                <motion.div
                  key={`${page}-${direction}`}
                  className={`swipe-page ${direction > 0 ? 'next' : 'prev'}`}
                  initial={{ x: direction > 0 ? '42%' : '-42%', opacity: 0.35, scale: 0.98 }}
                  animate={{ x: 0, opacity: [0.35, 0.88, 0], scale: [0.98, 1, 1] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.58, ease: [0.2, 0.82, 0.2, 1] }}
                >
                  <span />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="ipad-controls">
            <button
              type="button"
              className="ipad-arrow"
              onClick={() => turnTo(page - 1)}
              disabled={page === 1}
              aria-label={t('hortibioCatalog.previous')}
            >
              <span aria-hidden="true">{'<'}</span>
            </button>

            <div className="ipad-progress" aria-hidden="true">
              <span style={{ width: `${(page / pageCount) * 100}%` }} />
            </div>

            <button
              type="button"
              className="ipad-arrow"
              onClick={() => turnTo(page + 1)}
              disabled={page === pageCount}
              aria-label={t('hortibioCatalog.next')}
            >
              <span aria-hidden="true">{'>'}</span>
            </button>
          </div>
          <div className="ipad-home-indicator" aria-hidden="true" />
        </motion.div>
      </div>
    </div>
  );
}
