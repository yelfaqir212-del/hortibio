import { useState, useEffect } from 'react';
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

const heroVideos = [
  { webm: '/VD01.webm', mp4: '/VD01.mp4' },
  { webm: '/Vd02.webm', mp4: '/Vd02.mp4' },
  { webm: '/VD03.webm', mp4: '/VD03.mp4' },
];

const imgs = {
  appleRedGreen:  '/WhatsApp%20Image%202026-04-04%20at%2021.33.10.jpeg',
  appleSaplings:  '/WhatsApp%20Image%202026-04-04%20at%2021.33.10%20%281%29.jpeg',
  appleBloom:     '/WhatsApp%20Image%202026-04-04%20at%2021.33.12.jpeg',
  orchardRows:    '/WhatsApp%20Image%202026-04-04%20at%2021.33.13%20%282%29.jpeg',
  appleGreen:     '/WhatsApp%20Image%202026-04-07%20at%2017.27.13.jpeg',
  appleRed:       '/WhatsApp%20Image%202026-04-07%20at%2017.27.13%20%282%29.jpeg',
  greenhouse:     '/WhatsApp%20Image%202026-04-14%20at%2014.46.33.jpeg',
  appleYellow:    '/WhatsApp%20Image%202026-04-14%20at%2014.46.47.jpeg',
  nurseryField:   '/WhatsApp%20Image%202026-04-14%20at%2014.48.34.jpeg',
  aerialFarm:     '/DJI_0130.jpg',
  aerialWorkers:  '/DJI_0162.jpg',
  netStructure:   '/DSC01537.jpg',
};

const catalogVisuals = {
  certifiedPlants: imgs.appleRedGreen,
  hailNet:         imgs.netStructure,
  shadingNet:      imgs.greenhouse,
  poles:           imgs.aerialFarm,
  accessories:     imgs.aerialWorkers,
  windMachine:     imgs.orchardRows,
};

const riseUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

function App() {
  const { t, i18n } = useTranslation();
  const [heroVideoIndex, setHeroVideoIndex] = useState(0);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n, i18n.language]);

  const showcaseCards = [
    {
      id: 'products',
      image: imgs.appleRedGreen,
      title: t('hero.floating.products'),
      text: t('catalog.items.certifiedPlants.summary'),
      anchor: '#catalog',
      cta: t('nav.catalog'),
    },
    {
      id: 'plants',
      image: imgs.netStructure,
      title: t('hero.floating.plants'),
      text: t('catalog.items.hailNet.summary'),
      anchor: '#catalog',
      cta: t('nav.catalog'),
    },
    {
      id: 'routing',
      image: imgs.aerialFarm,
      title: t('hero.floating.routing'),
      text: t('catalog.items.poles.summary'),
      anchor: '#catalog',
      cta: t('nav.catalog'),
    },
  ];

  const trustMarks = [
    t('about.tags.import'),
    t('about.tags.protection'),
    t('contact.cards.imports'),
    t('contact.cards.exports'),
    t('about.tags.accessories'),
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
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <video
              className="hero-video"
              key={heroVideoIndex}
              autoPlay
              muted
              playsInline
              onEnded={() => setHeroVideoIndex((i) => (i + 1) % heroVideos.length)}
            >
              <source src={heroVideos[heroVideoIndex].webm} type="video/webm" />
              <source src={heroVideos[heroVideoIndex].mp4} type="video/mp4" />
            </video>

            <div className="hero-grid">
              <div className="hero-copy">
                <span className="section-eyebrow hero-eyebrow">{t('hero.kicker')}</span>
                <h1 className="hero-title">{t('hero.title')}</h1>
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
            <div className="ceo-mark" aria-hidden="true">H</div>

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
              <a
                className="contact-icon-btn contact-email-btn"
                href="mailto:contact@hortibio.ma?subject=Demande%20de%20contact%20Horti%20Bio"
                aria-label="Envoyer un e-mail à Horti Bio"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="22" height="22">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>contact@hortibio.ma</span>
              </a>

              <a
                className="contact-icon-btn contact-whatsapp-btn"
                href="https://wa.me/212702587609"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter via WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="22" height="22">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>+212 7 02 58 76 09</span>
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
