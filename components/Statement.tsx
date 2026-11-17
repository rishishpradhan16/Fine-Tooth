export default function Statement() {
  const indexLinks = [
    { label: 'Selected work', href: '#work' },
    { label: 'Mobile & web apps', href: '#again' },
    { label: 'Services & Development', href: '#capabilities' },
    { label: 'Client reviews (5★)', href: '#reviews' },
    { label: 'Our process', href: '#method' },
    { label: 'Meet our team', href: '#team' },
    { label: 'Plans & pricing', href: '#pricing' },
    { label: 'Fair questions', href: '#faq' },
    { label: 'Discuss project', href: '#contact' },
  ];

  return (
    <section id="statement" data-8b-section="statement" aria-labelledby="statement-title">
      <h2 className="m-text-3 statement__title" id="statement-title">
        <span className="statement__line">Confidence is</span>
        <span className="statement__line">
          engineered<span className="m-dot statement__dot" aria-hidden="true"></span>
        </span>
      </h2>
      <div className="statement__body">
        <p className="m-text-5 statement__lead" data-8b-motion="ink">
          Shipping fast is easy. Delivering modern, high-performance websites and native mobile apps while ensuring every critical checkout, API payload, game mechanic, and touch interaction holds under real-world conditions is where engineering counts. We build responsive web &amp; mobile experiences and partner with product teams to build reliable test suites, uncover regressions, and give engineering leaders absolute confidence before every release.
        </p>
        <nav className="statement__index" aria-label="On this page">
          <ul>
            {indexLinks.map((link) => (
              <li key={link.href}>
                <a className="m-link" href={link.href}>
                  <span className="m-link__label">{link.label}</span>
                  <svg className="m-link__arrow" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M2 8h11M9 3.5 13.5 8 9 12.5"/>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
