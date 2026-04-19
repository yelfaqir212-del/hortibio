import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const options = {
  fullScreen: { enable: false },
  background: { color: 'transparent' },
  particles: {
    number: {
      value: 55,
      density: { enable: true, area: 900 },
    },
    color: {
      value: ['#d1bb79', '#ffffff', '#9b842f', '#e8d9a8'],
    },
    shape: { type: 'circle' },
    opacity: {
      value: { min: 0.08, max: 0.45 },
      animation: { enable: true, speed: 0.6, sync: false },
    },
    size: {
      value: { min: 1, max: 2.5 },
    },
    move: {
      enable: true,
      speed: { min: 0.12, max: 0.55 },
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'bounce' },
    },
    links: {
      enable: true,
      color: '#d1bb79',
      distance: 140,
      opacity: 0.1,
      width: 0.7,
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
};

export function ContactParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      className="contact-particles"
      id="contact-particles"
      options={options}
    />
  );
}
