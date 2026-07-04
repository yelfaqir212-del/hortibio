import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './components/SectionTitle';
import { ContactParticles } from './components/ContactParticles';
import { SiamChat } from './components/SiamChat';
import { HortibioCatalog } from './components/HortibioCatalog';
import {
  aboutTagKeys,
  advantageIds,
  heroStats,
  languages,
  processStepIds,
  sustainabilityIds,
} from './data/siteContent';

const navItems = ['about', 'catalog', 'flow', 'ceo', 'contact'];
const heroSectorIds = ['certifiedPlants', 'hailNet', 'polesTubes', 'accessories', 'windMachine'];

const heroVideos = ['/VD01.mp4', '/Vd02.mp4', '/VD03.mp4'];
const themeStorageKey = 'hortibio-theme';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';

  const savedTheme = window.localStorage.getItem(themeStorageKey);
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

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

const riseUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

function App() {
  const { t, i18n } = useTranslation();
  const [heroVideoIndex, setHeroVideoIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n, i18n.language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  useEffect(() => {
    if (!isMobileNavOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileNavOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const ids = ['home', 'about', 'catalog', 'flow', 'ceo', 'contact'];
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

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

  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <>
      <div className="app-shell">
        <header className={`site-header ${isMobileNavOpen ? 'menu-open' : ''}`}>
        <a className="brand-lockup" href="#home" onClick={closeMobileNav}>
          <img src="/logohortibio.svg" className="brand-logo" alt="Hortibio" />
          <span className="brand-wordmark">hortibio</span>
        </a>

        <button
          className={`menu-toggle ${isMobileNavOpen ? 'active' : ''}`}
          type="button"
          aria-expanded={isMobileNavOpen}
          aria-controls="site-navigation"
          aria-label={isMobileNavOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          onClick={() => setIsMobileNavOpen((open) => !open)}
        >
          <span className="menu-toggle-line" />
          <span className="menu-toggle-line" />
          <span className="menu-toggle-line" />
        </button>

        <div className={`header-panel ${isMobileNavOpen ? 'is-open' : ''}`}>
          <nav className={`site-nav ${isMobileNavOpen ? 'is-open' : ''}`} id="site-navigation" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={activeSection === item ? 'nav-active' : ''}
                onClick={closeMobileNav}
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <div className="header-tools">
              <div className="language-toggle" role="group" aria-label="language switcher">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    className={i18n.language === language.code ? 'active' : ''}
                    onClick={() => {
                      i18n.changeLanguage(language.code);
                      closeMobileNav();
                    }}
                    type="button"
                  >
                    {language.label}
                  </button>
                ))}
              </div>

              <div className="theme-toggle" role="group" aria-label={t('nav.themeSwitcher')}>
                <button
                  className={theme === 'light' ? 'active' : ''}
                  onClick={() => setTheme('light')}
                  type="button"
                  aria-pressed={theme === 'light'}
                  aria-label={t('nav.lightTheme')}
                  title={t('nav.lightTheme')}
                >
                  <svg className="theme-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.8" />
                    <path
                      d="M12 2.75v2.5M12 18.75v2.5M21.25 12h-2.5M5.25 12h-2.5M18.54 5.46l-1.77 1.77M7.23 16.77l-1.77 1.77M18.54 18.54l-1.77-1.77M7.23 7.23 5.46 5.46"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="sr-only">{t('nav.lightTheme')}</span>
                </button>
                <button
                  className={theme === 'dark' ? 'active' : ''}
                  onClick={() => setTheme('dark')}
                  type="button"
                  aria-pressed={theme === 'dark'}
                  aria-label={t('nav.darkTheme')}
                  title={t('nav.darkTheme')}
                >
                  <svg className="theme-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M19.25 14.89A7.25 7.25 0 0 1 9.1 4.75a7.75 7.75 0 1 0 10.15 10.14Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="sr-only">{t('nav.darkTheme')}</span>
                </button>
              </div>
            </div>
            <a className="header-cta" href="#contact" onClick={closeMobileNav}>
              {t('hero.secondary')}
            </a>
          </div>
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
              <source src={heroVideos[heroVideoIndex]} type="video/mp4" />
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
                <div className="hero-sector-card">
                  <span className="hero-note-label">{t('hero.sectors.title')}</span>
                  <ul className="hero-sector-list">
                    {heroSectorIds.map((id) => (
                      <li key={id}>{t(`hero.sectors.items.${id}`)}</li>
                    ))}
                  </ul>
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
          <HortibioCatalog />
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
            <ContactParticles theme={theme} variant="ceo" className="ceo-particles" id="ceo-particles" />

            <div className="ceo-mark">
              <img src="/logohortibio.svg" alt="Hortibio logo" className="ceo-mark-logo" />
            </div>

            <div className="ceo-copy">
              <span className={`section-eyebrow ${theme === 'dark' ? 'on-dark' : ''}`}>{t('ceo.eyebrow')}</span>
              <h2>{t('ceo.title')}</h2>
              <blockquote>{t('ceo.quote')}</blockquote>
              <p>{t('ceo.note')}</p>
              <strong>{t('ceo.name')}</strong>
              <span className="ceo-role">{t('ceo.signature')}</span>
            </div>
          </motion.div>
        </section>
        </main>

        <div className="footer-zone">
          <section className="contact-section" id="contact">
            <motion.div className="contact-card" {...riseUp()}>
              <ContactParticles theme={theme} variant="contact" className="contact-particles" id="contact-particles" />

            <div className="contact-inner">
              <div className="contact-logo-center">
                <img src="/logohortibio.svg" className="brand-logo contact-logo" alt="Hortibio" />
                <strong className="contact-brand-wordmark">hortibio</strong>
              </div>

              <SectionTitle
                eyebrow={t('contact.eyebrow')}
                title={t('contact.title')}
                text={t('contact.lead')}
                align="center"
              />

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
              </div>
            </div>
            </motion.div>
          </section>

          <footer className="site-footer">
            <p>Copyright © 2026 — Owned by Horti Bio</p>
            <a
              className="footer-credit"
              href="https://www.brandea.ma"
              target="_blank"
              rel="noopener noreferrer"
            >
              Created by Brandea Brand Builders
            </a>
          </footer>
        </div>
      </div>
      <SiamChat />
    </>
  );
}

export default App;
