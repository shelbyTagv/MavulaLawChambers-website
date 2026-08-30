import { Link } from "react-router-dom";
import { reviews } from "../../data/reviews";
import { formatDate } from "../../utils/dateFormatter";

export default function ReviewsGrid() {
  const previewReviews = reviews.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 bg-brand-charcoal border-t border-gray-800">
      <div className="section-container">
        {/* Centered Reviews Heading matching reference */}
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3 tracking-wide uppercase">
            Reviews
          </h2>
          <div className="w-16 h-0.5 bg-gold mb-4" />
          <Link
            to="/reviews"
            className="text-gold hover:text-gold-light text-sm font-body font-semibold transition-colors flex items-center gap-1"
          >
            View All
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewReviews.map((review) => (
            <article key={review.id} className="card-dark group hover:-translate-y-1 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={review.image}
                  alt={review.clientName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-5 flex flex-1 flex-col">
                {/* Client name and date header */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-gold transition-colors flex-1">
                    {review.clientName}
                  </h3>
                  <span className="text-xs text-gray-400 font-body whitespace-nowrap">
                    {formatDate(review.date)}
                  </span>
                </div>

                {/* Rating stars */}
                {review.rating !== undefined && (
                  <div className="flex items-center gap-0.5 mb-3" aria-label={`Rating: ${review.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className={`w-3.5 h-3.5 ${i < (review.rating ?? 5) ? "text-gold" : "text-gray-600"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}

                <p className="text-gray-400 text-sm font-body mb-4 line-clamp-3 flex-1">
                  {review.excerpt}
                </p>

                <Link
                  to="/reviews"
                  className="text-gold hover:text-gold-light text-sm font-body font-semibold transition-colors flex items-center gap-1 mt-auto"
                >
                  Read More
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
