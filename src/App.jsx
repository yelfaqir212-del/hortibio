import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './components/SectionTitle';
import {
  aboutTagKeys,
  advantageIds,
  catalogItems,
  heroPillKeys,
  heroStats,
  languages,
  processStepIds,
  sustainabilityIds,
} from './data/siteContent';

const navItems = ['about', 'catalog', 'flow', 'ceo', 'contact'];

const heroImage =
  'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80';

const visualSources = {
  produce:
    'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
  field:
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  plant:
    'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
  herbs:
    'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1200&q=80',
};

const catalogVisuals = {
  atlasCitrus: visualSources.produce,
  sunvineTomatoes: visualSources.produce,
  emeraldHerbs: visualSources.herbs,
  oliveSaplings: visualSources.plant,
  berrySeedlings: visualSources.plant,
  signaturePalms: visualSources.field,
};

const riseUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.75,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n, i18n.language]);

  const showcaseCards = [
    {
      id: 'products',
      image: visualSources.produce,
      title: t('hero.floating.products'),
      text: t('catalog.items.atlasCitrus.summary'),
      anchor: '#catalog',
      cta: t('nav.catalog'),
    },
    {
      id: 'plants',
      image: visualSources.plant,
      title: t('hero.floating.plants'),
      text: t('catalog.items.oliveSaplings.summary'),
      anchor: '#catalog',
      cta: t('nav.catalog'),
    },
    {
      id: 'routing',
      image: visualSources.field,
      title: t('hero.floating.routing'),
      text: t('process.lead'),
      anchor: '#flow',
      cta: t('nav.flow'),
    },
  ];

  const trustMarks = [
    t('about.tags.wholesale'),
    t('about.tags.retail'),
    t('contact.cards.imports'),
    t('contact.cards.exports'),
    t('about.tags.landscaping'),
    t('contact.cards.plants'),
  ];

  const contactTags = [
    t('contact.cards.imports'),
    t('contact.cards.exports'),
    t('contact.cards.plants'),
  ];

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#home">
          <span className="brand-mark">H</span>
          <span className="brand-wordmark">hortibio</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`}>
              {t(`nav.${item}`)}
            </a>
          ))}
        </nav>

        <div className="header-actions">
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

          <a className="header-cta" href="#contact">
            {t('hero.secondary')}
          </a>
        </div>
      </header>

      <main className="site-main">
        <section className="hero-section" id="home">
          <motion.div
            className="hero-stage"
            style={{ '--hero-image': `url("${heroImage}")` }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="section-eyebrow hero-eyebrow">{t('hero.kicker')}</span>
                <h1 className="hero-title">
                  <span>{t('hero.title')}</span>
                </h1>
                <p className="hero-lead">{t('hero.lead')}</p>

                <div className="hero-actions">
                  <a className="button-primary" href="#catalog">
                    {t('nav.catalog')}
                  </a>
                  <a className="button-secondary" href="#contact">
                    {t('hero.secondary')}
                  </a>
                </div>
              </div>

              <div className="hero-aside">
                <div className="hero-note">
                  <span className="hero-note-label">{t('hero.panelTitle')}</span>
                  <p>{t('hero.panelCopy')}</p>
                  <small>{t('hero.panelFootnote')}</small>
                </div>

                <div className="hero-pills">
                  {heroPillKeys.map((key) => (
                    <span key={key}>{t(key)}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-stats">
              {heroStats.map((stat) => (
                <article key={stat.key} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{t(stat.key)}</span>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="story-section" id="about">
          <div className="section-frame section-frame-light">
            <div className="story-copy-grid">
              <motion.div className="story-copy" {...riseUp()}>
                <SectionTitle eyebrow={t('about.eyebrow')} title={t('about.title')} text={t('about.lead')} />
              </motion.div>

              <motion.div className="story-emphasis" {...riseUp(0.1)}>
                <p className="story-body">{t('about.body')}</p>

                <div className="story-tags">
                  {aboutTagKeys.map((key) => (
                    <span key={key}>{t(key)}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="showcase-grid">
              {showcaseCards.map((card, index) => (
                <motion.article
                  key={card.id}
                  className="showcase-card"
                  style={{ '--card-image': `url("${card.image}")` }}
                  {...riseUp(index * 0.08)}
                >
                  <div className="showcase-media" aria-hidden="true" />
                  <div className="showcase-body">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <a className="showcase-link" href={card.anchor}>
                      {card.cta}
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="catalog-section" id="catalog">
          <div className="catalog-shell">
            <div className="catalog-header">
              <SectionTitle eyebrow={t('catalog.eyebrow')} title={t('catalog.title')} text={t('catalog.lead')} />

              <motion.div className="catalog-brief" {...riseUp(0.1)}>
                <span className="catalog-brief-label">{t('catalog.liveLabel')}</span>
                <strong>{t('catalog.liveTitle')}</strong>
                <p>{t('catalog.liveBody')}</p>
              </motion.div>
            </div>

            <div className="gallery-grid">
              {catalogItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  className="gallery-card"
                  style={{ '--card-image': `url("${catalogVisuals[item.id]}")` }}
                  {...riseUp(index * 0.06)}
                >
                  <div className="gallery-content">
                    <div className="gallery-badges">
                      <span>{t(`catalog.groups.${item.group}`)}</span>
                      <span>{t(`catalog.items.${item.id}.metric`)}</span>
                    </div>
                    <h3>{t(`catalog.items.${item.id}.title`)}</h3>
                    <p>{t(`catalog.items.${item.id}.summary`)}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="flow-section" id="flow">
          <div className="section-frame section-frame-soft">
            <div className="flow-heading">
              <SectionTitle eyebrow={t('process.eyebrow')} title={t('process.title')} text={t('process.lead')} />
            </div>

            <div className="reason-grid">
              {advantageIds.map((id, index) => (
                <motion.article key={id} className="reason-card" {...riseUp(index * 0.08)}>
                  <span className="reason-index">0{index + 1}</span>
                  <h3>{t(`advantages.${id}.title`)}</h3>
                  <p>{t(`advantages.${id}.copy`)}</p>
                </motion.article>
              ))}
            </div>

            <div className="process-strip">
              {processStepIds.map((id, index) => (
                <motion.article key={id} className="process-card" {...riseUp(index * 0.06)}>
                  <span className="process-step">0{index + 1}</span>
                  <h3>{t(`process.steps.${id}.title`)}</h3>
                  <p>{t(`process.steps.${id}.copy`)}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="commitment-section">
          <div className="section-frame section-frame-light">
            <SectionTitle
              eyebrow={t('sustainability.eyebrow')}
              title={t('sustainability.title')}
              text={t('sustainability.lead')}
            />

            <div className="commitment-grid">
              {sustainabilityIds.map((id, index) => (
                <motion.article key={id} className="commitment-card" {...riseUp(index * 0.08)}>
                  <span className="commitment-line" aria-hidden="true" />
                  <h3>{t(`sustainability.${id}.title`)}</h3>
                  <p>{t(`sustainability.${id}.copy`)}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section">
          <div className="section-frame section-frame-cream">
            <SectionTitle eyebrow={t('trust.eyebrow')} title={t('trust.title')} text={t('trust.lead')} />

            <div className="trust-marks">
              {trustMarks.map((mark, index) => (
                <motion.div key={mark} className="trust-mark" {...riseUp(index * 0.05)}>
                  {mark}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="ceo-section" id="ceo">
          <motion.div className="ceo-card" {...riseUp()}>
            <div className="ceo-mark" aria-hidden="true">
              H
            </div>

            <div className="ceo-copy">
              <span className="section-eyebrow on-dark">{t('ceo.eyebrow')}</span>
              <h2>{t('ceo.title')}</h2>
              <blockquote>{t('ceo.quote')}</blockquote>
              <p>{t('ceo.note')}</p>
              <strong>{t('ceo.signature')}</strong>
            </div>
          </motion.div>
        </section>
      </main>

      <div className="footer-zone">
        <section className="contact-section" id="contact">
          <motion.div className="contact-card" {...riseUp()}>
            <div className="contact-header">
              <div className="contact-brand">
                <span className="brand-mark footer-mark">H</span>
                <div>
                  <strong className="contact-brand-wordmark">hortibio</strong>
                  <p>{t('footer.tag')}</p>
                </div>
              </div>

              <div className="contact-copy">
                <SectionTitle eyebrow={t('contact.eyebrow')} title={t('contact.title')} text={t('contact.lead')} />
              </div>
            </div>

            <div className="contact-actions-grid">
              <a className="contact-mail" href={`mailto:${t('contact.email')}`}>
                <span>{t('contact.mailLabel')}</span>
                <strong>{t('contact.email')}</strong>
              </a>

              <a className="contact-request" href={`mailto:${t('contact.email')}?subject=Hortibio%20Inquiry`}>
                {t('contact.action')}
              </a>
            </div>

            <div className="contact-tags">
              {contactTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </section>

        <footer className="site-footer">
          <p>Copyright © Hortibio</p>

          <div className="footer-meta">
            <a className="footer-mail" href={`mailto:${t('contact.email')}`}>
              {t('contact.email')}
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
