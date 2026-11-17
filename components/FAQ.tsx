import QA_DATA from '@/data/qa-data';

export default function FAQ() {
  return (
    <section id="faq" data-8b-section="faq" aria-labelledby="faq-title">
      <div className="faq__head">
        <h2 className="m-text-3" id="faq-title" data-8b-motion="rise">
          Fair questions<span className="m-dot" aria-hidden="true"></span>
        </h2>
        <p className="m-text faq__lead">
          Clear answers about how our testing works, what each plan covers, and how we handle scope, retesting, and automation code.
        </p>
      </div>
      <div className="faq__list">
        {QA_DATA.faq.map((item, index) => (
          <details key={index} className="faq__item">
            <summary className="m-text-7">
              {item.q}
              <span className="faq__mark" aria-hidden="true"></span>
            </summary>
            <p className="m-text faq__answer">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
