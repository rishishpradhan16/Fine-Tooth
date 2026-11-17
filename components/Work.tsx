import QA_DATA from '@/data/qa-data';

export default function Work() {
  return (
    <section id="work" data-8b-section="work" aria-labelledby="work-title">
      <div className="work__plate" aria-hidden="true"></div>
      <div className="work__stage">
        <div className="work__head">
          <h2 className="m-text-3" id="work-title">
            Selected work<span className="m-dot" aria-hidden="true"></span>
          </h2>
          <p className="m-text-5 work__lead">
            Selected websites and digital platforms engineered, developed, and tested by our team for speed, modern UI, and release-ready reliability.
          </p>
        </div>
        <div className="work__frame">
          <ul className="work__track">
            {QA_DATA.portfolio.websites.map((item) => (
              <li key={item.id} className="case">
                <div className="case__media">
                  <img 
                    className="case__img" 
                    src={item.image.startsWith('/') ? item.image : `/${item.image}`} 
                    width={1280} 
                    height={720} 
                    alt={`${item.name} interface`} 
                    loading="lazy" 
                  />
                </div>
                <span className="m-badge case__tag">{item.tag}</span>
                <div className="case__text">
                  <h3 className="m-text-4 case__name">{item.name}</h3>
                  <p className="m-text-5 case__line">{item.shortDescription}</p>
                  <p className="case__action">
                    <a className="m-link" href={item.url} target="_blank" rel="noopener noreferrer">
                      <span className="m-link__label">
                        {item.id === 'satguruvisioncare' ? 'Visit satguruvisioncare.com' :
                         item.id === 'careerdiary' ? 'Visit careerdiary.in' :
                         item.id === 'sarkarijobsuchna' ? 'Visit sarkarijobsuchna.com' :
                         item.id === 'kahaaniverse' ? 'Explore KahaaniVerse platform' :
                         'Visit sarkariguidejob.com'}
                      </span>
                      <svg className="m-link__arrow" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M2 8h11M9 3.5 13.5 8 9 12.5"/>
                      </svg>
                    </a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
