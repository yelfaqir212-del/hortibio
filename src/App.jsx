import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ParticleField } from './components/ParticleField';
import { ProductsWorkspace } from './components/ProductsWorkspace';
import { SectionTitle } from './components/SectionTitle';
import {
  aboutTagKeys,
  advantageIds,
  catalogItems,
  heroPillKeys,
  heroStats,
  languages,
  navKeys,
  processStepIds,
  sustainabilityIds,
  viewKeys,
} from './data/siteContent';

const DEFAULT_HASH = '#home';

const getInitialHash = () =>
  typeof window !== 'undefined' && window.location.hash ? window.location.hash : DEFAULT_HASH;

const getViewFromHash = (hash) => (hash === '#products' ? 'products' : 'home');

function App() {
  const { t, i18n } = useTranslation();
  const [routeHash, setRouteHash] = useState(getInitialHash);
  const activeView = getViewFromHash(routeHash);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n, i18n.language]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const syncHash = () => {
      setRouteHash(window.location.hash || DEFAULT_HASH);
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);

    return () => {
      window.removeEventListener('hashchange', syncHash);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const frameId = window.requestAnimationFrame(() => {
      const targetId = (routeHash || DEFAULT_HASH).slice(1) || 'home';

      if (targetId === 'products') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [routeHash, activeView]);

  const navigateToHash = (hash) => {
    if (typeof window === 'undefined') {
      return;
    }

    const nextHash = hash || DEFAULT_HASH;

    if (window.location.hash === nextHash) {
      setRouteHash(nextHash);
      return;
    }

    window.location.hash = nextHash;
  };

  return (
    <div className="app-shell">
      <ParticleField />
      <div className="background-glow background-glow-left" />
      <div className="background-glow background-glow-right" />
      <div className="page-noise" />

      <header className="topbar">
        <motion.a
          className="brand-lockup"
          href="#home"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={(event) => {
            event.preventDefault();
            navigateToHash('#home');
          }}
          transition={{ duration: 0.8 }}
        >
          <span className="brand-mark">H</span>
          <span className="brand-wordmark">hortibio</span>
        </motion.a>

        <div className="view-switcher" role="tablist" aria-label={t('views.label')}>
          {viewKeys.map((view) => {
            const isActive = activeView === view;
            const hash = view === 'products' ? '#products' : '#home';

            return (
              <button
                key={view}
                className={`view-pill ${isActive ? 'active' : ''}`}
                onClick={() => navigateToHash(hash)}
                role="tab"
                aria-selected={isActive}
                type="button"
              >
                {isActive ? <motion.span className="view-pill-highlight" layoutId="view-pill-highlight" /> : null}
                <span>{t(`views.${view}`)}</span>
              </button>
            );
          })}
        </div>

        <nav className="topbar-nav">
          {navKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={(event) => {
                event.preventDefault();
                navigateToHash(`#${key}`);
              }}
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>

        <div className="language-toggle" role="group" aria-label="language switcher">
          {languages.map((language) => (
            <button
              key={language.code}
              className={i18n.language === language.code ? 'active' : ''}
              onClick={() => i18n.changeLanguage(language.code)}
              type="button"
            >
              {language.label}
            </button>
          ))}
        </div>
      </header>

      <main>
        {activeView === 'products' ? (
          <ProductsWorkspace items={catalogItems} />
        ) : (
          <>
            <section className="hero-section" id="home">
              <div className="hero-copy">
                <motion.span
                  className="hero-kicker"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  {t('hero.kicker')}
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.16 }}
                >
                  {t('hero.title')}
                </motion.h1>

                <motion.p
                  className="hero-lead"
                  initial={{ opacity: 0, y: 34 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.24 }}
                >
                  {t('hero.lead')}
                </motion.p>

                <motion.div
                  className="hero-actions"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.32 }}
                >
                  <a
                    className="button-primary"
                    href="#products"
                    onClick={(event) => {
                      event.preventDefault();
                      navigateToHash('#products');
                    }}
                  >
                    {t('hero.primary')}
                  </a>
                  <a
                    className="button-secondary"
                    href="#contact"
                    onClick={(event) => {
                      event.preventDefault();
                      navigateToHash('#contact');
                    }}
                  >
                    {t('hero.secondary')}
                  </a>
                </motion.div>

                <motion.div
                  className="hero-pills"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.38 }}
                >
                  {heroPillKeys.map((key) => (
                    <span key={key}>{t(key)}</span>
                  ))}
                </motion.div>

                <motion.div
                  className="hero-stats"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.44 }}
                >
                  {heroStats.map((stat) => (
                    <div key={stat.key} className="stat-card">
                      <strong>{stat.value}</strong>
                      <span>{t(stat.key)}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="hero-visual-core">
                  <div className="core-ring" />
                  <div className="core-ring core-ring-two" />
                  <div className="core-panel">
                    <span>{t('hero.panelTitle')}</span>
                    <h2>hortibio</h2>
                    <p>{t('hero.panelCopy')}</p>
                    <small>{t('hero.panelFootnote')}</small>
                  </div>

                  <motion.div
                    className="floating-chip floating-chip-top"
                    animate={{ y: [0, -16, 0], rotate: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                  >
                    {t('hero.floating.products')}
                  </motion.div>

                  <motion.div
                    className="floating-chip floating-chip-right"
                    animate={{ y: [0, 14, 0], rotate: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.6 }}
                  >
                    {t('hero.floating.plants')}
                  </motion.div>

                  <motion.div
                    className="floating-chip floating-chip-bottom"
                    animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.25 }}
                  >
                    {t('hero.floating.routing')}
                  </motion.div>
                </div>
              </motion.div>
            </section>

            <motion.section
              className="section-grid about-section"
              id="about"
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="about-copy">
                <SectionTitle
                  eyebrow={t('about.eyebrow')}
                  title={t('about.title')}
                  text={t('about.lead')}
                />
                <p className="about-body">{t('about.body')}</p>
                <div className="tag-row">
                  {aboutTagKeys.map((tagKey) => (
                    <span key={tagKey}>{t(tagKey)}</span>
                  ))}
                </div>
              </div>

              <div className="advantages-grid">
                {advantageIds.map((id, index) => (
                  <motion.article
                    key={id}
                    className="advantage-card"
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.75, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <span className="advantage-index">0{index + 1}</span>
                    <h3>{t(`advantages.${id}.title`)}</h3>
                    <p>{t(`advantages.${id}.copy`)}</p>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            <section className="process-section" id="flow">
              <SectionTitle
                eyebrow={t('process.eyebrow')}
                title={t('process.title')}
                text={t('process.lead')}
              />
              <div className="process-grid">
                {processStepIds.map((id, index) => (
                  <motion.article
                    key={id}
                    className="process-card"
                    initial={{ opacity: 0, y: 42 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.75, delay: index * 0.08 }}
                  >
                    <span className="process-step">{index + 1}</span>
                    <h3>{t(`process.steps.${id}.title`)}</h3>
                    <p>{t(`process.steps.${id}.copy`)}</p>
                  </motion.article>
                ))}
              </div>
            </section>

            <section className="sustainability-section">
              <SectionTitle
                eyebrow={t('sustainability.eyebrow')}
                title={t('sustainability.title')}
                text={t('sustainability.lead')}
              />
              <div className="sustainability-grid">
                {sustainabilityIds.map((id, index) => (
                  <motion.article
                    key={id}
                    className="sustainability-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.75, delay: index * 0.09 }}
                  >
                    <span className="sustainability-glow" />
                    <h3>{t(`sustainability.${id}.title`)}</h3>
                    <p>{t(`sustainability.${id}.copy`)}</p>
                  </motion.article>
                ))}
              </div>
            </section>

            <section className="ceo-section" id="ceo">
              <motion.div
                className="ceo-card"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="section-eyebrow">{t('ceo.eyebrow')}</span>
                <h2>{t('ceo.title')}</h2>
                <blockquote>{t('ceo.quote')}</blockquote>
                <p>{t('ceo.note')}</p>
                <strong>{t('ceo.signature')}</strong>
              </motion.div>
            </section>

            <section className="contact-section" id="contact">
              <SectionTitle
                eyebrow={t('contact.eyebrow')}
                title={t('contact.title')}
                text={t('contact.lead')}
              />
              <div className="contact-grid">
                <motion.a
                  className="contact-email"
                  href={`mailto:${t('contact.email')}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.75 }}
                >
                  <span>{t('contact.mailLabel')}</span>
                  <strong>{t('contact.email')}</strong>
                </motion.a>

                <motion.a
                  className="contact-cta"
                  href={`mailto:${t('contact.email')}?subject=Hortibio%20Inquiry`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.75, delay: 0.1 }}
                >
                  <span>{t('contact.action')}</span>
                </motion.a>
              </div>

              <div className="contact-tags">
                <span>{t('contact.cards.imports')}</span>
                <span>{t('contact.cards.exports')}</span>
                <span>{t('contact.cards.plants')}</span>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <span className="brand-mark small">H</span>
        <p>{t('footer.tag')}</p>
      </footer>
    </div>
  );
}

export default App;
