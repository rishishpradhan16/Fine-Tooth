'use client';

import { useState } from 'react';
import QA_DATA from '@/data/qa-data';

export default function Footer() {
  const [newsStatus, setNewsStatus] = useState<string | null>(null);

  const handleNewsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    if (!email || !email.includes('@')) {
      setNewsStatus('error');
      return;
    }
    setNewsStatus('success');
    form.reset();
  };

  return (
    <footer id="footer" data-8b-section="footer">
      <p className="m-text-2 footer__bye" style={{ '--len': 3 } as React.CSSProperties}>
        <span className="footer__word">Bye</span>
        <span className="footer__period" aria-hidden="true">
          <span className="footer__aperture">
            <img 
              className="footer__img" 
              src="https://images.unsplash.com/photo-1754738381783-f9a2847bfef2?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8MXx8cHVycGxlJTIwYWJzdHJhY3QlMjAzZCUyMHNoYXBlfGVufDF8Mnx8fDE3OTEyMDk2Mjd8MA&auto=format&fit=crop&w=1200&h=1200&q=68" 
              width={1200} 
              height={1200} 
              alt="" 
              style={{ background: '#590ca6' }}
            />
            <span className="footer__tint"></span>
          </span>
        </span>
      </p>
      <div className="footer__grid">
        <nav className="footer__col" aria-label="Footer">
          <p className="m-text-6 footer__label">Explore</p>
          <a className="m-link-2" href="#work">Work</a>
          <a className="m-link-2" href="#again">Applications</a>
          <a className="m-link-2" href="#capabilities">Services</a>
          <a className="m-link-2" href="#reviews">Reviews (5★)</a>
          <a className="m-link-2" href="#method">Approach</a>
          <a className="m-link-2" href="#pricing">Pricing</a>
          <a className="m-link-2" href="#team">Team</a>
          <a className="m-link-2" href="#faq">FAQ</a>
        </nav>
        <div className="footer__col">
          <p className="m-text-6 footer__label">Talk</p>
          <a className="m-link-2" href={`mailto:${QA_DATA.agency.email}`}>{QA_DATA.agency.email}</a>
          <span className="m-text-6" style={{ color: 'var(--color-5)', marginTop: '4px', display: 'inline-block' }}>
            Remote Worldwide
          </span>
        </div>
        <div className="footer__col">
          <p className="m-text-6 footer__label">Follow</p>
          <a className="m-link-2" href={QA_DATA.agency.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="m-link-2" href={QA_DATA.agency.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="m-link-2" href={QA_DATA.agency.social.twitter} target="_blank" rel="noopener noreferrer">Twitter / X</a>
        </div>
        <form className="footer__news" onSubmit={handleNewsSubmit} noValidate>
          <label className="m-text-7" htmlFor="news-email">
            {QA_DATA.agency.name} in your inbox, once a month<span className="m-dot" aria-hidden="true"></span>
          </label>
          <div className="footer__field">
            <input 
              className="m-field" 
              id="news-email" 
              name="email" 
              type="email" 
              autoComplete="email" 
              placeholder="Your work email" 
              required 
            />
            <button className="m-icon" type="submit" aria-label="Subscribe to QA newsletter">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M2 8h11M9 3.5 13.5 8 9 12.5"/>
              </svg>
            </button>
          </div>
          <p 
            className="m-text-6 footer__note" 
            role="status" 
            aria-live="polite"
            style={{ color: newsStatus === 'error' ? '#f87171' : newsStatus === 'success' ? '#34d399' : undefined }}
          >
            {newsStatus === 'error' ? 'Please enter a valid email address.' :
             newsStatus === 'success' ? 'You are in. See you next month.' :
             'No spam, monthly QA & test automation insights, unsubscribe anytime.'}
          </p>
        </form>
      </div>
      <div className="footer__legal m-text-6">
        <p>© 2026 {QA_DATA.agency.name}</p>
        <p>Remote Worldwide</p>
      </div>
    </footer>
  );
}
