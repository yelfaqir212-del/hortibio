import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
import { useTranslation } from 'react-i18next';

const catalogPdf = `${import.meta.env.BASE_URL}hortibio-catalog.pdf`;

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export function HortibioCatalog() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(19);
  const [direction, setDirection] = useState(1);
  const [isTurning, setIsTurning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [renderError, setRenderError] = useState('');
  const canvasRef = useRef(null);
  const screenRef = useRef(null);
  const pdfRef = useRef(null);
  const touchStartX = useRef(null);
  const renderTaskRef = useRef(null);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!isTurning) return undefined;
    const timer = window.setTimeout(() => setIsTurning(false), 760);
    return () => window.clearTimeout(timer);
  }, [isTurning, page]);

  useEffect(() => {
    let isMounted = true;

    setIsLoading(true);
    pdfjsLib
      .getDocument(catalogPdf)
      .promise.then((pdf) => {
        if (!isMounted) return;
        pdfRef.current = pdf;
        setPageCount(pdf.numPages);
        setRenderError('');
      })
      .catch(() => {
        if (!isMounted) return;
        setRenderError(t('hortibioCatalog.renderError'));
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
      renderTaskRef.current?.cancel();
      pdfRef.current?.destroy();
    };
  }, [t]);

  useEffect(() => {
    const screen = screenRef.current;
    if (!screen) return undefined;

    const updateSize = () => {
      const rect = screen.getBoundingClientRect();
      setScreenSize({ width: rect.width, height: rect.height });
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(screen);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const pdf = pdfRef.current;
    const canvas = canvasRef.current;
    if (!pdf || !canvas || !screenSize.width || !screenSize.height) return undefined;

    let isCancelled = false;

    const renderPage = async () => {
      try {
        renderTaskRef.current?.cancel();
        const pdfPage = await pdf.getPage(page);
        if (isCancelled) return;

        const baseViewport = pdfPage.getViewport({ scale: 1 });
        const availableWidth = screenSize.width;
        const availableHeight = screenSize.height;
        const scale = Math.min(
          availableWidth / baseViewport.width,
          availableHeight / baseViewport.height
        );
        const viewport = pdfPage.getViewport({ scale });
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        const context = canvas.getContext('2d');

        canvas.width = Math.floor(viewport.width * pixelRatio);
        canvas.height = Math.floor(viewport.height * pixelRatio);
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        context.clearRect(0, 0, viewport.width, viewport.height);

        const renderTask = pdfPage.render({ canvasContext: context, viewport });
        renderTaskRef.current = renderTask;
        await renderTask.promise;

        if (!isCancelled) setRenderError('');
      } catch (error) {
        if (error?.name !== 'RenderingCancelledException' && !isCancelled) {
          setRenderError(t('hortibioCatalog.renderError'));
        }
      }
    };

    renderPage();

    return () => {
      isCancelled = true;
      renderTaskRef.current?.cancel();
    };
  }, [page, screenSize, t]);

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

          <div
            className="ipad-screen"
            ref={screenRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <canvas
              key={page}
              className="catalog-page-canvas"
              ref={canvasRef}
              aria-label={t('hortibioCatalog.frameTitle')}
            />

            {isLoading ? <div className="catalog-render-state">{t('hortibioCatalog.loading')}</div> : null}
            {renderError ? (
              <div className="catalog-render-state">
                <span>{renderError}</span>
                <a href={catalogPdf} target="_blank" rel="noreferrer">
                  {t('hortibioCatalog.openPdf')}
                </a>
              </div>
            ) : null}

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
