import QA_DATA from '@/data/qa-data';

const SERVICE_MEDIA: Array<{ image: string; bg: string; alt: string }> = [
  {
    image: '/images/work/satguru-vision-care.png',
    bg: '#0c2f5a',
    alt: 'Custom website development and web engineering showcase'
  },
  {
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1024&h=576&q=80',
    bg: '#1d1836',
    alt: 'Mobile App Development and engineering across Android and iOS'
  },
  {
    image: '/images/services/manual-functional-testing.jpg',
    bg: '#c3a5e3',
    alt: 'Manual & Functional Testing QA workspace with test cases execution and defect tracking'
  },
  {
    image: '/images/services/ui-cross-browser-testing.jpg',
    bg: '#efe5fd',
    alt: 'UI and cross-browser testing across Chrome, Firefox, Safari, and Edge'
  },
  {
    image: '/images/services/api-testing.jpg',
    bg: '#c8bce2',
    alt: 'API and backend integration testing dashboard'
  },
  {
    image: '/images/services/mobile-application-testing.jpg',
    bg: '#d6c3f0',
    alt: 'Mobile application testing across iOS and Android devices'
  },
  {
    image: '/images/services/game-testing.jpg',
    bg: '#a68ec8',
    alt: 'Game testing and mechanics validation dashboard'
  },
  {
    image: '/images/services/automation-engineering.jpg',
    bg: '#d9c8ed',
    alt: 'Test automation engineering and CI CD pipeline verification'
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" data-8b-section="capabilities" aria-labelledby="capabilities-title">
      <div className="capabilities__head">
        <h2 className="m-text-3" id="capabilities-title" data-8b-motion="rise">
          What we do<span className="m-dot" aria-hidden="true"></span>
        </h2>
        <p className="m-text-5 capabilities__lead">
          Custom website development, mobile app engineering, manual &amp; automated QA testing, API contracts, game testing, and release-ready digital product delivery.
        </p>
      </div>
      <ol className="capabilities__deck">
        {QA_DATA.services.map((service, index) => {
          const media = SERVICE_MEDIA[index] || SERVICE_MEDIA[0];
          return (
            <li key={service.title} className="service m-surface">
              <div className="service__text">
                <h3 className="m-text-4">{service.title}</h3>
                <p className="m-text-5 service__line">{service.description}</p>
                <ul className="service__tags">
                  {service.badges.map((badge) => (
                    <li key={badge} className="m-badge">{badge}</li>
                  ))}
                </ul>
              </div>
              <div className="service__media" data-8b-motion="iris">
                <img 
                  src={media.image} 
                  style={{ background: media.bg }} 
                  width={1024} 
                  height={576} 
                  alt={media.alt} 
                  loading="lazy" 
                />
              </div>
              <span className="service__shade" aria-hidden="true"></span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
