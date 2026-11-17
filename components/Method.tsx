import QA_DATA from '@/data/qa-data';

export default function Method() {
  return (
    <section id="method" data-8b-section="method" aria-labelledby="method-title">
      <div className="method__head">
        <h2 className="m-text-3" id="method-title" data-8b-motion="rise">
          How we work<span className="m-dot" aria-hidden="true"></span>
        </h2>
        <p className="m-text-5 method__lead" data-8b-motion="ink">
          A practical four-step quality cycle designed for clear communication, structured defect reporting, and dependable test coverage.
        </p>
      </div>
      <div className="method__body">
        <div className="method__ring" aria-hidden="true">
          <svg className="method__svg" viewBox="0 0 400 400">
            <circle className="method__track" cx="200" cy="200" r="170" />
            <circle
              className="method__arc"
              cx="200"
              cy="200"
              r="170"
              pathLength={1}
              strokeDasharray="1 1"
              strokeDashoffset={0}
            />
          </svg>
          <span className="method__station" style={{ '--x': 0, '--y': -1 } as React.CSSProperties}></span>
          <span className="method__station" style={{ '--x': 1, '--y': 0 } as React.CSSProperties}></span>
          <span className="method__station" style={{ '--x': 0, '--y': 1 } as React.CSSProperties}></span>
          <span className="method__station" style={{ '--x': -1, '--y': 0 } as React.CSSProperties}></span>
          <span className="method__arm">
            <span className="method__runner"></span>
          </span>
        </div>
        <ol className="method__steps">
          {QA_DATA.process.map((step) => (
            <li key={step.step} className="step">
              <h3 className="m-text-4">{step.title}</h3>
              <p className="m-text-5 step__text">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
