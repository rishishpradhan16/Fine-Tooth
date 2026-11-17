import QA_DATA from '@/data/qa-data';

export default function Team() {
  return (
    <section id="team" data-8b-section="team" aria-labelledby="team-title">
      <div className="team__head">
        <p className="m-badge" data-8b-motion="rise">Core QA Specialists</p>
        <h2 className="m-text-3" id="team-title" data-8b-motion="rise">
          Meet Our Team<span className="m-dot" aria-hidden="true"></span>
        </h2>
        <p className="m-text-5 team__lead" data-8b-motion="ink">
          {QA_DATA.team.summary}
        </p>
      </div>
      <div className="team__grid">
        {QA_DATA.team.members.map((member) => (
          <article key={member.name} className="team-card m-surface" data-8b-motion="rise">
            <div className="team-card__avatar">
              <span className="team-card__initials">{member.initial}</span>
            </div>
            <h3 className="m-text-4 team-card__name">{member.name}</h3>
            <p className="team-card__role">QA Team Member</p>
          </article>
        ))}
      </div>
      <div className="team__highlight m-surface" data-8b-motion="ink">
        <p className="m-text-6 team__highlight-badge">Collective Experience</p>
        <p className="m-text-4 team__highlight-title">
          {QA_DATA.team.collectiveExperience} of collective QA experience
        </p>
        <p className="m-text-5 team__highlight-text">
          Hands-on testing across manual functional checks, UI/cross-browser compatibility, API verification, mobile flows, game mechanics, and test automation with Selenium, Playwright, and Cypress.
        </p>
      </div>
    </section>
  );
}
