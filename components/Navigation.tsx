'use client';

import { useState, useEffect } from 'react';
import QA_DATA from '@/data/qa-data';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const scrollToHash = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(hash);
    if (!target) return;

    if (typeof window !== 'undefined' && window.history && window.history.pushState) {
      window.history.pushState(null, '', hash);
    } else {
      window.location.hash = hash;
    }

    const nav = document.getElementById('navigation');
    const navOffset = nav ? nav.offsetHeight : 0;

    // @ts-ignore
    if (typeof window !== 'undefined' && window.lenis && typeof window.lenis.scrollTo === 'function') {
      // @ts-ignore
      window.lenis.start();
      // @ts-ignore
      window.lenis.scrollTo(target, { offset: -navOffset, duration: 1.2 });
    } else {
      const targetY = target.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }

    if (hash === '#contact') {
      setTimeout(() => {
        const firstInput = target.querySelector<HTMLInputElement>('input[name="name"]');
        if (firstInput && document.activeElement !== firstInput) {
          firstInput.focus({ preventScroll: true });
        }
      }, 1200);
    }
  };

  return (
    <header id="navigation" className="nav" data-8b-section="navigation">
      <a className="nav__brand" href="#hero" onClick={(e) => scrollToHash(e, '#hero')} aria-label={`${QA_DATA.agency.name}, back to the top`}>
        {QA_DATA.agency.name}<span className="m-dot" aria-hidden="true"></span>
      </a>
      <nav className="nav__links" aria-label="Main">
        <ul>
          <li><a className="m-link-2" href="#work" onClick={(e) => scrollToHash(e, '#work')}>Work</a></li>
          <li><a className="m-link-2" href="#again" onClick={(e) => scrollToHash(e, '#again')}>Apps</a></li>
          <li><a className="m-link-2" href="#capabilities" onClick={(e) => scrollToHash(e, '#capabilities')}>Services</a></li>
          <li><a className="m-link-2" href="#reviews" onClick={(e) => scrollToHash(e, '#reviews')}>Reviews</a></li>
          <li><a className="m-link-2" href="#method" onClick={(e) => scrollToHash(e, '#method')}>Process</a></li>
          <li><a className="m-link-2" href="#team" onClick={(e) => scrollToHash(e, '#team')}>Team</a></li>
          <li><a className="m-link-2" href="#pricing" onClick={(e) => scrollToHash(e, '#pricing')}>Pricing</a></li>
          <li><a className="m-link-2" href="#faq" onClick={(e) => scrollToHash(e, '#faq')}>FAQ</a></li>
        </ul>
      </nav>
      <a className="m-btn nav__cta" href="#contact" onClick={(e) => scrollToHash(e, '#contact')}>
        <span className="m-btn__label">Discuss Your Project</span>
      </a>
      <button 
        className="m-btn-2 nav__menu" 
        type="button" 
        aria-expanded={isMenuOpen} 
        aria-controls="menu"
        onClick={() => setIsMenuOpen(true)}
      >
        <span className="m-btn__label">Menu</span>
      </button>

      <div 
        className="menu" 
        id="menu" 
        role="dialog" 
        aria-modal="true" 
        aria-label="Menu" 
        data-lenis-prevent 
        hidden={!isMenuOpen}
        style={{ display: isMenuOpen ? 'flex' : 'none' }}
      >
        <div className="menu__top">
          <button 
            className="m-icon menu__close" 
            type="button" 
            aria-label="Close the menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3 3 13"/></svg>
          </button>
        </div>
        <ul className="menu__list">
          <li><a href="#work" onClick={(e) => scrollToHash(e, '#work')}>Work<span className="m-dot" aria-hidden="true"></span></a></li>
          <li><a href="#again" onClick={(e) => scrollToHash(e, '#again')}>Apps<span className="m-dot" aria-hidden="true"></span></a></li>
          <li><a href="#capabilities" onClick={(e) => scrollToHash(e, '#capabilities')}>Services<span className="m-dot" aria-hidden="true"></span></a></li>
          <li><a href="#reviews" onClick={(e) => scrollToHash(e, '#reviews')}>Reviews<span className="m-dot" aria-hidden="true"></span></a></li>
          <li><a href="#method" onClick={(e) => scrollToHash(e, '#method')}>Process<span className="m-dot" aria-hidden="true"></span></a></li>
          <li><a href="#team" onClick={(e) => scrollToHash(e, '#team')}>Team<span className="m-dot" aria-hidden="true"></span></a></li>
          <li><a href="#pricing" onClick={(e) => scrollToHash(e, '#pricing')}>Pricing<span className="m-dot" aria-hidden="true"></span></a></li>
          <li><a href="#faq" onClick={(e) => scrollToHash(e, '#faq')}>FAQ<span className="m-dot" aria-hidden="true"></span></a></li>
          <li><a href="#contact" onClick={(e) => scrollToHash(e, '#contact')}>Contact<span className="m-dot" aria-hidden="true"></span></a></li>
        </ul>
        <p className="m-text menu__foot">{QA_DATA.agency.email} · Web &amp; Mobile App Development &amp; QA</p>
      </div>
    </header>
  );
}
