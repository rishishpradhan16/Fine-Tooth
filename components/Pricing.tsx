'use client';

import { useState } from 'react';
import QA_DATA from '@/data/qa-data';

export default function Pricing() {
  const [isAuto, setIsAuto] = useState(false);

  return (
    <section id="pricing" data-8b-section="pricing" aria-labelledby="pricing-title">
      <div className="pricing__head">
        <div>
          <h2 className="m-text-3" id="pricing-title" data-8b-motion="rise">
            Plans and pricing<span className="m-dot" aria-hidden="true"></span>
          </h2>
          <p className="m-text pricing__lead">
            Transparent starting rates in USD. Choose a focused one-time trial or predictable monthly QA capacity with strict project limits.
          </p>
        </div>
        <div className="pricing__toggle-group" role="group" aria-label="Testing type toggle">
          <button 
            type="button" 
            className={`pricing__toggle-btn ${!isAuto ? 'is-active' : ''}`} 
            onClick={() => setIsAuto(false)}
          >
            Manual QA
          </button>
          <button 
            type="button" 
            className={`pricing__toggle-btn ${isAuto ? 'is-active' : ''}`} 
            onClick={() => setIsAuto(true)}
          >
            With Automation
          </button>
        </div>
      </div>

      <div className="pricing__grid">
        {/* Trial QA Plan */}
        <article className="plan-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span className="plan-card__badge" style={{ background: 'var(--color-6)' }}>Trial QA</span>
            <span className="plan-card__limit">1 project</span>
          </div>
          <h3 className="plan-card__name">Trial QA</h3>
          <p className="plan-card__scope">One-time assessment audit</p>
          <div className="plan-card__price-box">
            <span className="plan-card__amount">$149</span>
            <span className="plan-card__period">one-time</span>
            <div className="plan-card__alt">Single feature or flow</div>
          </div>
          <p className="plan-card__desc">Focused entry-level evaluation to identify bugs, test critical paths, and experience our testing style.</p>
          <ul className="plan-card__list">
            <li className="plan-card__item">One project only</li>
            <li className="plan-card__item">One core feature, workflow, or critical path</li>
            <li className="plan-card__item">Structured findings with reproducible bug reports</li>
            <li className="plan-card__item">Clear summary of high, medium, and low issues</li>
            <li className="plan-card__item" style={{ color: 'var(--color-5)' }}>Retesting after fixes is not included in the trial</li>
          </ul>
          <a className="m-btn plan-card__cta" href="#contact"><span className="m-btn__label">Choose Trial QA ($149)</span></a>
        </article>

        {/* Monthly Basic */}
        <article className="plan-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span className="plan-card__badge" style={{ background: 'var(--color-6)' }}>20 Hours / Mo</span>
            <span className="plan-card__limit">1 project</span>
          </div>
          <h3 className="plan-card__name">Basic</h3>
          <p className="plan-card__scope">20 hours / month</p>
          <div className="plan-card__price-box">
            <span className="plan-card__amount">{isAuto ? '$449' : '$299'}</span>
            <span className="plan-card__period">/ month</span>
            <div className="plan-card__alt">{isAuto ? 'With Automation' : 'Manual QA'}</div>
          </div>
          <p className="plan-card__desc">Essential quality checks for steady development, small releases, and weekly feature verification.</p>
          <ul className="plan-card__list">
            <li className="plan-card__item">One project only</li>
            <li className="plan-card__item">20 total testing hours per month</li>
            <li className="plan-card__item">Core user journey and exploratory testing</li>
            <li className="plan-card__item">Weekly progress reports</li>
            <li className="plan-card__item">Retesting reported defects after fixes, within the plan's monthly hours</li>
            <li className="plan-card__item">
              {isAuto ? 'Automation option: scoped Selenium, Playwright, or Cypress checks' : 'Manual functional & regression checks'}
            </li>
          </ul>
          <a className="m-btn plan-card__cta" href="#contact">
            <span className="m-btn__label">Choose Basic ({isAuto ? '$449' : '$299'})</span>
          </a>
        </article>

        {/* Monthly Pro (Recommended) */}
        <article className="plan-card plan-card--featured">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span className="plan-card__badge">Recommended</span>
            <span className="plan-card__limit">1 project</span>
          </div>
          <h3 className="plan-card__name">Pro</h3>
          <p className="plan-card__scope">45 hours / month</p>
          <div className="plan-card__price-box">
            <span className="plan-card__amount">{isAuto ? '$899' : '$699'}</span>
            <span className="plan-card__period">/ month</span>
            <div className="plan-card__alt">{isAuto ? 'With Automation' : 'Manual QA'}</div>
          </div>
          <p className="plan-card__desc">Comprehensive QA coverage for active development cycles and scheduled sprint releases.</p>
          <ul className="plan-card__list">
            <li className="plan-card__item">One project only</li>
            <li className="plan-card__item">45 total testing hours per month (total capacity, not per project)</li>
            <li className="plan-card__item">Broader functional and regression coverage</li>
            <li className="plan-card__item">API testing where agreed</li>
            <li className="plan-card__item">Weekly progress reports</li>
            <li className="plan-card__item">Retesting reported defects after fixes, within the plan's monthly hours</li>
            <li className="plan-card__item">
              {isAuto ? 'Scoped automation development or maintenance (Selenium, Playwright, Cypress)' : 'Manual functional, UI & agreed API tests'}
            </li>
          </ul>
          <a className="m-btn plan-card__cta" href="#contact">
            <span className="m-btn__label">Choose Pro ({isAuto ? '$899' : '$699'})</span>
          </a>
        </article>

        {/* Monthly Growth */}
        <article className="plan-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span className="plan-card__badge" style={{ background: 'var(--color-6)' }}>60 Hours / Mo</span>
            <span className="plan-card__limit">{isAuto ? 'Up to 3 projects' : '1 project'}</span>
          </div>
          <h3 className="plan-card__name">Growth</h3>
          <p className="plan-card__scope">60 hours / month</p>
          <div className="plan-card__price-box">
            <span className="plan-card__amount">{isAuto ? '$1,699' : '$1,299'}</span>
            <span className="plan-card__period">/ month</span>
            <div className="plan-card__alt">{isAuto ? 'With Automation' : 'Manual QA'}</div>
          </div>
          <p className="plan-card__desc">High-capacity testing bandwidth for teams managing continuous releases across core workflows.</p>
          <ul className="plan-card__list">
            <li className="plan-card__item">{isAuto ? 'Up to 3 projects covered' : 'One project only'}</li>
            <li className="plan-card__item">
              {isAuto 
                ? '60 total testing hours per month across up to 3 projects (shared capacity, not 60 hrs/project)' 
                : '60 total testing hours per month for one project'}
            </li>
            <li className="plan-card__item">Cross-browser and multi-viewport regression checks</li>
            <li className="plan-card__item">Weekly progress reports with sprint-by-sprint summaries</li>
            <li className="plan-card__item">Retesting reported defects after fixes, within the plan's monthly hours</li>
            <li className="plan-card__item">
              {isAuto ? 'Test automation suites using Selenium, Playwright, or Cypress' : 'Full manual QA: functional, UI, API & regression'}
            </li>
          </ul>
          <a className="m-btn plan-card__cta" href="#contact">
            <span className="m-btn__label">Choose Growth ({isAuto ? '$1,699' : '$1,299'})</span>
          </a>
        </article>
      </div>

      <div className="pricing__conditions">
        <h4 className="pricing__conditions-title">Engagement and scope conditions</h4>
        <div className="pricing__conditions-grid">
          <div className="pricing__condition-item">
            <strong>Project limits:</strong> The Trial QA, Basic, and Pro plans cover 1 project only. Growth plan under Manual QA covers 1 project only. Growth with Automation covers up to 3 projects.
          </div>
          <div className="pricing__condition-item">
            <strong>Shared hours:</strong> On the Growth plan with automation (up to 3 projects), the 60 monthly testing hours are total capacity shared across all included projects, not 60 hours per project.
          </div>
          <div className="pricing__condition-item">
            <strong>Retesting policy:</strong> Retesting of reported defects is included in monthly plans but consumes hours from your purchased monthly total. Unused hours do not roll over between months.
          </div>
          <div className="pricing__condition-item">
            <strong>Quotes:</strong> Additional projects, hours, platforms, or work outside the agreed scope require a separate quote.
          </div>
        </div>
      </div>
    </section>
  );
}
