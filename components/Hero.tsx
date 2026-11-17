import QA_DATA from '@/data/qa-data';

export default function Hero() {
  return (
    <section id="hero" data-8b-section="hero" aria-labelledby="hero-title">
      <div className="hero__intro">
        <p 
          className="m-badge" 
          style={{ 
            marginBottom: '8px', 
            background: 'color-mix(in srgb, var(--color-3) 12%, transparent)', 
            borderColor: 'var(--color-3)', 
            color: 'var(--color-3)', 
            fontWeight: 700, 
            letterSpacing: '0.04em' 
          }}
        >
          {QA_DATA.agency.eyebrow}
        </p>
        <h2 
          className="m-text-3 hero__headline" 
          style={{ 
            fontSize: 'clamp(28px, 3.2vw, 44px)', 
            lineHeight: 1.15, 
            fontWeight: 800, 
            letterSpacing: '-0.03em', 
            margin: '0 0 10px' 
          }}
        >
          {QA_DATA.agency.headline}
        </h2>
        <p className="m-text-5 hero__lead">
          {QA_DATA.agency.supportingCopy}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', marginTop: '18px' }}>
          <a className="m-btn" href="#contact">
            <span className="m-btn__label">Discuss Your Project</span>
          </a>
          <a className="m-link hero__link" href="#work">
            <span className="m-link__label">Explore Our Work</span>
            <svg className="m-link__arrow" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M2 8h11M9 3.5 13.5 8 9 12.5"/>
            </svg>
          </a>
        </div>
      </div>
      <h1 className="m-text-2 hero__title" id="hero-title" style={{ '--len': 5 } as React.CSSProperties}>
        <span className="hero__word">
          <span className="hero__mask">
            <span className="hero__glyphs">Hello</span>
          </span>
        </span>
        <span className="hero__period" aria-hidden="true">
          <span className="hero__stage">
            <span className="hero__orbit">
              <span className="hero__moon"></span>
            </span>
            <span className="hero__aperture">
              <img 
                className="hero__img" 
                src="https://images.unsplash.com/photo-1754738381783-f9a2847bfef2?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8MXx8cHVycGxlJTIwYWJzdHJhY3QlMjAzZCUyMHNoYXBlfGVufDF8Mnx8fDE3OTEyMDk2Mjd8MA&auto=format&fit=crop&w=1200&h=1200&q=68" 
                width="1200" 
                height="1200" 
                alt="" 
                style={{ background: '#590ca6' }}
              />
              <span className="hero__tint"></span>
            </span>
          </span>
        </span>
      </h1>
    </section>
  );
}
