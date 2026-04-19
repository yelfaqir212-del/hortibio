import { useEffect, useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const detailKeys = ['dates', 'professionals', 'public', 'location'];

export function SiamChat() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="siam-chat-root">
      <AnimatePresence>
        {isOpen ? (
          <motion.aside
            key="siam-chat-panel"
            className="siam-chat-panel"
            id={panelId}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label={t('siamChat.title')}
          >
            <div className="siam-chat-header">
              <div className="siam-chat-heading">
                <span className="siam-chat-kicker">{t('siamChat.kicker')}</span>
                <strong>{t('siamChat.title')}</strong>
              </div>

              <button
                className="siam-chat-close"
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label={t('siamChat.close')}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6 18 18M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <p className="siam-chat-lead">{t('siamChat.welcome')}</p>
            <div className="siam-chat-highlight">{t('siamChat.invite')}</div>

            <div className="siam-chat-details">
              {detailKeys.map((key) => (
                <article key={key} className="siam-chat-detail">
                  <span>{t(`siamChat.details.${key}.label`)}</span>
                  <strong>{t(`siamChat.details.${key}.value`)}</strong>
                </article>
              ))}
            </div>

            <p className="siam-chat-note">{t('siamChat.note')}</p>

            <div className="siam-chat-actions">
              <a
                className="siam-chat-link primary"
                href="https://www.salon-agriculture.ma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('siamChat.siteCta')}
              </a>

              <a className="siam-chat-link secondary" href="#contact" onClick={() => setIsOpen(false)}>
                {t('siamChat.contactCta')}
              </a>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>

      <button
        className="siam-chat-trigger"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? t('siamChat.close') : t('siamChat.open')}
      >
        <img src="/logohortibio.svg" alt="" aria-hidden="true" className="siam-chat-trigger-logo" />
      </button>
    </div>
  );
}
