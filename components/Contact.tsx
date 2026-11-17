'use client';

import { useState } from 'react';
import QA_DATA from '@/data/qa-data';

export default function Contact() {
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value;

    if (!name || !email || !message || !email.includes('@')) {
      setStatus({
        type: 'error',
        message: 'Please add your name, a valid email and a few words about your testing needs.'
      });
      return;
    }

    setStatus({
      type: 'success',
      message: 'Thank you! We have received your inquiry and will reply within two working days.'
    });
    form.reset();
  };

  return (
    <section id="contact" data-8b-section="contact" aria-labelledby="contact-title">
      <h2 className="m-text-3 contact__title" id="contact-title" style={{ '--len': 10 } as React.CSSProperties}>
        <span className="contact__voice">Let's talk</span>
        <span className="m-dot" aria-hidden="true"></span>
      </h2>
      <div className="contact__grid">
        <div className="contact__info">
          <p className="m-text-5 contact__lead">
            Tell us about your application, testing priorities, or release timeline. We review every inquiry and reply within two business days.
          </p>
          <a className="contact__mail" href={`mailto:${QA_DATA.agency.email}`}>
            <span>{QA_DATA.agency.email}</span>
          </a>
          <div className="contact__places" style={{ marginTop: '20px' }}>
            <div>
              <p className="m-text-7" style={{ marginBottom: '6px' }}>Remote Worldwide</p>
              <p className="m-text" style={{ color: 'color-mix(in srgb, var(--color-2) 80%, transparent)', lineHeight: 1.5 }}>
                Operating 100% remotely. Collaborating with product and development teams across global time zones.
              </p>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__pair">
            <label className="m-text-6">
              Full name
              <input className="m-field" name="name" type="text" autoComplete="name" placeholder="Alex Morgan" required />
            </label>
            <label className="m-text-6">
              Work email
              <input className="m-field" name="email" type="email" autoComplete="email" placeholder="alex@company.com" required />
            </label>
          </div>
          <div className="contact__pair">
            <label className="m-text-6">
              Company or product
              <input className="m-field" name="company" type="text" autoComplete="organization" placeholder="Acme Inc." />
            </label>
            <label className="m-text-6">
              What can we help with?
              <select className="m-field" name="topic" id="contact-topic" defaultValue="Discuss Project">
                <option value="Discuss Project">Discuss Your Project</option>
                <option value="Website Development">Custom Website &amp; Web Development</option>
                <option value="Mobile App Development">Mobile App Development (Android &amp; iOS)</option>
                <option value="Trial QA Plan ($149)">Trial QA Plan ($149)</option>
                <option value="Monthly Basic Plan">Monthly Basic Plan ($299 / $449)</option>
                <option value="Monthly Pro Plan">Monthly Pro Plan ($699 / $899)</option>
                <option value="Monthly Growth Plan">Monthly Growth Plan ($1,299 / $1,699)</option>
                <option value="Game Testing & Mechanics">Game Testing &amp; Mechanics Validation</option>
              </select>
            </label>
          </div>
          <div className="contact__pair">
            <label className="m-text-6">
              Application type
              <select className="m-field" name="app_type" defaultValue="Custom Website">
                <option value="Custom Website">Custom Business / Clinic / Portal Website</option>
                <option value="Web Application">Web Application / SaaS</option>
                <option value="Mobile App">Mobile App (iOS / Android)</option>
                <option value="Game (Mobile / Desktop / WebGL)">Game (Mobile / Desktop / WebGL)</option>
                <option value="API & Backend">API &amp; Backend Services</option>
                <option value="Cross-Platform">Cross-Platform</option>
              </select>
            </label>
            <label className="m-text-6">
              Preferred framework / tech
              <select className="m-field" name="framework" defaultValue="Full-Stack Web (React/Next.js/HTML/CSS)">
                <option value="Full-Stack Web (React/Next.js/HTML/CSS)">Modern Web (React / Next.js / HTML5 / CSS3)</option>
                <option value="Mobile (React Native/Flutter/Android/iOS)">Mobile (React Native / Flutter / Android Native)</option>
                <option value="Playwright">Playwright</option>
                <option value="Cypress">Cypress</option>
                <option value="Selenium">Selenium</option>
                <option value="Manual QA only">Manual QA only</option>
                <option value="Need guidance">Need guidance / Open to recommendations</option>
              </select>
            </label>
          </div>
          <div className="contact__pair">
            <label className="m-text-6" style={{ gridColumn: '1 / -1' }}>
              Expected scope &amp; timeline
              <select className="m-field" name="scope" defaultValue="One-Time Trial">
                <option value="One-Time Trial">One-Time Trial Assessment</option>
                <option value="Ongoing Monthly QA">Ongoing Monthly QA &amp; Regression</option>
                <option value="Pre-launch Sprint">Pre-launch Regression Sprint</option>
                <option value="Test Automation">Test Automation Implementation</option>
              </select>
            </label>
          </div>
          <label className="m-text-6">
            Project details &amp; goals
            <textarea 
              className="m-field" 
              name="message" 
              rows={3} 
              required 
              placeholder="Describe your product, current testing needs, or upcoming release timelines..."
            />
          </label>
          <div className="contact__actions">
            <button className="m-btn" type="submit">
              <span className="m-btn__label">Send message</span>
            </button>
            {status.message && (
              <p 
                className="m-text contact__status" 
                role="status" 
                aria-live="polite"
                style={{ color: status.type === 'error' ? '#f87171' : '#34d399' }}
              >
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
