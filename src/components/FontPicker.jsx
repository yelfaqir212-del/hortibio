import { useEffect, useState } from 'react';

const FONT_KEY = 'hortibio-font';

export function FontPicker() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() => {
    try {
      return window.localStorage.getItem(FONT_KEY) || '';
    } catch {
      return '';
    }
  });

  useEffect(() => {
    if (!active) return;
    document.documentElement.setAttribute('data-font', active);
  }, [active]);

  const choose = (fontKey) => {
    try {
      window.localStorage.setItem(FONT_KEY, fontKey);
    } catch {}
    // set dataset so immediate preview is available, then refresh as requested
    document.documentElement.setAttribute('data-font', fontKey);
    setTimeout(() => {
      window.location.reload();
    }, 150);
  };

  return (
    <div className={`font-picker ${open ? 'open' : ''}`} aria-hidden={false}>
      <div className="font-picker-bubbles" aria-hidden={!open}>
        <button
          title="DM Serif Display"
          className="font-bubble"
          type="button"
          onClick={() => choose('dm')}
        >
          <span className="font-label">DM Serif</span>
        </button>

        <button
          title="Tinos"
          className="font-bubble"
          type="button"
          onClick={() => choose('tinos')}
        >
          <span className="font-label">Tinos</span>
        </button>

        <button
          title="Playfair Display"
          className="font-bubble"
          type="button"
          onClick={() => choose('playfair')}
        >
          <span className="font-label">Playfair</span>
        </button>
      </div>

      <button
        className="font-picker-btn"
        type="button"
        aria-expanded={open}
        aria-label="Font picker"
        onClick={() => setOpen((v) => !v)}
      >
        A
      </button>
    </div>
  );
}

export default FontPicker;
