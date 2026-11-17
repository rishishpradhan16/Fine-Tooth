'use client';

import QA_DATA from '@/data/qa-data';

const APP_IMAGES: Record<string, { src: string; bg: string }> = {
  'sarkariguide-buddy': {
    src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&h=1125&q=80',
    bg: '#1b3274'
  },
  'chessmaster-play': {
    src: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=900&h=1125&q=80',
    bg: '#1f1d26'
  },
  'novajump-game': {
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&h=1125&q=80',
    bg: '#590c0c'
  },
  'zenmahjong-puzzle': {
    src: 'https://images.unsplash.com/photo-1558324190-c940eb141401?auto=format&fit=crop&w=900&h=1125&q=80',
    bg: '#590c0c'
  },
  'studentscanner-studyscan': {
    src: '/images/apps/studyscan.jpg',
    bg: '#0f172a'
  },
  'nostalgiacam': {
    src: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&w=900&h=1125&q=80',
    bg: '#0c8cd9'
  },
  'kahaaniverse-app': {
    src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&h=1125&q=80',
    bg: '#4a148c'
  }
};

export default function AppsWheel() {
  return (
    <section id="again" data-8b-section="again" aria-labelledby="again-title">
      <div className="again__stage">
        <div className="again__head">
          <h2 className="m-text-3" id="again-title">
            Apps &amp; Mobile Games<span className="m-dot" aria-hidden="true"></span>
          </h2>
          <p className="m-text-5 again__lead">
            Selected mobile applications and games developed &amp; tested by our studio — engineered for fluid touch response, 60fps frame rates, and verified on real Google Play devices.
          </p>
        </div>
        <div className="again__swing">
          <ul className="again__wheel">
            {QA_DATA.portfolio.applications.map((app) => {
              const imgConfig = APP_IMAGES[app.id] || {
                src: 'https://images.unsplash.com/photo-1558324190-c940eb141401?auto=format&fit=crop&w=900&h=1125&q=80',
                bg: '#1f1d26'
              };

              return (
                <li key={app.id} className="partner">
                  <div className="partner__card">
                    <img 
                      className="partner__img" 
                      src={imgConfig.src} 
                      width={900} 
                      height={1125} 
                      alt={`${app.name} interface`} 
                      loading="lazy" 
                      style={{ background: imgConfig.bg }}
                      onError={(e) => {
                        // If external image fails, gracefully fallback to local studyscan or solid styled surface
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = '/images/apps/studyscan.jpg';
                      }}
                    />
                    <div className="partner__text">
                      <span className="m-badge partner__year">{app.badge}</span>
                      <h3 className="m-text-4 partner__name">{app.name}</h3>
                      <p className="m-text partner__line">{app.shortDescription}</p>
                      <a 
                        className="partner__link" 
                        href={app.appStoreUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg className="play-icon" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M3.6 1.8A1.8 1.8 0 0 0 3 3.3v17.4a1.8 1.8 0 0 0 .6 1.5l.1.1 9.8-9.8v-.2L3.7 1.7l-.1.1zM17 8.5l-2.4 2.4 2.4 2.4 2.8-1.6c.8-.5.8-1.3 0-1.7L17 8.5zM14.6 11.9l-2.2-2.2-8.5-8.5c-.3.4-.4.9-.4 1.5l11.1 9.2zm-2.2.2 2.2 2.2-11.1 9.2c0 .6.1 1.1.4 1.5l8.5-8.5z"/>
                        </svg>
                        <span>Get on Google Play</span>
                        <svg className="m-link__arrow" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M2 8h11M9 3.5 13.5 8 9 12.5"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
