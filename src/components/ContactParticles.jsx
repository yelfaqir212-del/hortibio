import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const particleThemes = {
  light: {
    colors: ['#153d73', '#1d5c8e', '#2368a3', '#2a73b4', '#335f97', '#3a7cc3'],
    linkColor: '#1d5c8e',
  },
  dark: {
    colors: ['#7eb6e5', '#8bc1ee', '#9acbf2', '#a6d5f8', '#b4ddfb', '#c1e5ff'],
    linkColor: '#9acbf2',
  },
};

const particleVariants = {
  contact: {
    count: 55,
    sizeMin: 2,
    sizeMax: 5,
    speedMax: 0.55,
    linkDistance: 140,
  },
  ceo: {
    count: 42,
    sizeMin: 2,
    sizeMax: 4.4,
    speedMax: 0.45,
    linkDistance: 128,
  },
};

export function ContactParticles({
  theme = 'light',
  variant = 'contact',
  className = 'contact-particles',
  id = 'contact-particles',
}) {
  const [ready, setReady] = useState(false);
  const palette = particleThemes[theme] ?? particleThemes.light;
  const config = particleVariants[variant] ?? particleVariants.contact;

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    particles: {
      number: {
        value: config.count,
        density: { enable: true, area: 900 },
      },
      color: {
        value: palette.colors,
      },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.08, max: 0.45 },
        animation: { enable: true, speed: 0.6, sync: false },
      },
      size: {
        value: { min: config.sizeMin, max: config.sizeMax },
      },
      move: {
        enable: true,
        speed: { min: 0.12, max: config.speedMax },
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
      links: {
        enable: true,
        color: palette.linkColor,
        distance: config.linkDistance,
        opacity: 0.12,
        width: 1.4,
      },
    },
    detectRetina: true,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        resize: { enable: true },
      },
      modes: {
        grab: {
          distance: 200,
          links: { opacity: 0.32 },
        },
      },
    },
  }), [config, palette]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      className={className}
      id={id}
      options={options}
    />
  );
}
