import { useEffect, useState } from 'react';
import Wave from './Wave';
import { waveHeights } from '../utils';
import './Nav.css';

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open]);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#packages', label: 'Wedding Packages' },
    { href: '#coordination', label: 'Coordination' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav>
      <div className="nav-inner">
        <a className="nav-logo" href="#top">
          <Wave heights={waveHeights(5, 5, 15)} gap={2} barWidth={3} radius="1px" />
          <span className="nav-logo-text">Hear <em>After</em></span>
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>

        <div className="nav-right">
          <a className="nav-cta" href="#contact">Check Your Date</a>

          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`hamburger${open ? ' is-open' : ''}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a className="mobile-cta" href="#contact" onClick={() => setOpen(false)}>
          Check Your Date
        </a>
      </div>
    </nav>
  );
}