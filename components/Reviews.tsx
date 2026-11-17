import QA_DATA from '@/data/qa-data';

export default function Reviews() {
  const getInitials = (name: string) => {
    return name
      .replace(/^Dr\.\s*/, '')
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <section id="reviews" data-8b-section="reviews" aria-labelledby="reviews-title">
      <div className="reviews__head">
        <div>
          <p className="m-badge reviews__badge" data-8b-motion="rise">Client Feedback &amp; Testimonials</p>
          <h2 className="m-text-3" id="reviews-title" data-8b-motion="rise">
            5-Star Client Reviews<span className="m-dot" aria-hidden="true"></span>
          </h2>
          <p className="m-text-5 reviews__lead" data-8b-motion="ink">
            Real feedback from founders, product managers, and engineering teams whose websites and mobile applications we helped develop and test.
          </p>
        </div>
        <div className="reviews__score-card" data-8b-motion="rise">
          <div className="reviews__score-top">
            <span className="reviews__score-number">{QA_DATA.reviews.averageRating.toFixed(1)}</span>
            <div className="reviews__score-stars" aria-label="5 out of 5 stars">★★★★★</div>
          </div>
          <p className="reviews__score-label">
            {QA_DATA.reviews.clientSatisfactionRate} 5-Star Rating across Web &amp; Mobile Releases
          </p>
          <div className="reviews__score-tags">
            <span className="reviews__score-tag">25+ Apps &amp; Websites Delivered</span>
            <span className="reviews__score-tag">Zero Release Escapes</span>
            <span className="reviews__score-tag">100% On-Time Delivery</span>
          </div>
        </div>
      </div>

      <div className="reviews__grid">
        {QA_DATA.reviews.items.map((review) => (
          <article key={review.id} className="review-card" data-8b-motion="rise">
            <div className="review-card__top">
              <div className="review-card__stars" aria-label="5 out of 5 stars">★★★★★</div>
              <span className="m-badge review-card__badge">{review.badge}</span>
            </div>
            <blockquote className="review-card__quote">
              “{review.quote}”
            </blockquote>
            <div className="review-card__author">
              <div className="review-card__avatar">{getInitials(review.name)}</div>
              <div className="review-card__info">
                <h3 className="review-card__name">{review.name}</h3>
                <p className="review-card__role">{review.role}, {review.company}</p>
                <p className="review-card__project">{review.project}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
