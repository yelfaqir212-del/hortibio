import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const particleOptions = {
  fullScreen: { enable: false },
  background: {
    color: 'transparent',
  },
  particles: {
    number: {
      value: 54,
      density: {
        enable: true,
        area: 950,
      },
    },
    color: {
      value: ['#6ef0bf', '#69b7ff', '#e8f7ff', '#39d4bc'],
    },
    shape: {
      type: ['circle', 'image'],
      options: {
        image: [
          {
            src: '/leaf-particle.svg',
            width: 40,
            height: 40,
          },
        ],
      },
    },
    opacity: {
      value: { min: 0.12, max: 0.48 },
      animation: {
        enable: true,
        speed: 0.8,
      },
    },
    size: {
      value: { min: 4, max: 14 },
    },
    move: {
      enable: true,
      speed: { min: 0.1, max: 0.46 },
      direction: 'top',
      outModes: {
        default: 'out',
      },
      drift: { min: -0.1, max: 0.1 },
      trail: {
        enable: true,
        length: 4,
        fill: {
          color: 'transparent',
        },
      },
    },
    links: {
      enable: true,
      color: '#63b7ff',
      distance: 120,
      opacity: 0.18,
      width: 1,
    },
  },
  detectRetina: true,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'grab',
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      grab: {
        distance: 160,
        links: {
          opacity: 0.35,
        },
      },
    },
  },
};

export function ParticleField() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  if (!ready) {
    return null;
  }

  return <Particles className="particle-layer" id="hortibio-particles" options={particleOptions} />;
}
