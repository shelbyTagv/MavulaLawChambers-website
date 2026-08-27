import { useState } from "react";
import { reviews } from "../data/reviews";
import PageHeader from "../components/ui/PageHeader";

export default function Reviews() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5 mb-2" aria-label={`Rating: ${rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-gold" : "text-gray-600"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <main>
      <PageHeader title="Client Reviews" subtitle="What our clients say about us" />

      <section className="py-16 sm:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <article key={review.id} className="card-dark group hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={review.image}
                    alt={`Review by ${review.clientName}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 bg-gold/90 text-black text-xs font-bold px-2 py-1 rounded">
                    {new Date(review.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="p-5">
                  {review.rating !== undefined && renderStars(review.rating)}
                  <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    Review by {review.clientName}
                  </h3>
                  <p className="text-gray-400 text-sm font-body mb-4">
                    {expandedId === review.id ? review.body : review.excerpt}
                  </p>
                  <button
                    onClick={() => toggleExpand(review.id)}
                    className="text-gold hover:text-gold-light text-sm font-body font-semibold transition-colors flex items-center gap-1"
                  >
                    {expandedId === review.id ? "Show Less" : "Read More"}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${
                        expandedId === review.id ? "rotate-90" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {reviews.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 font-body text-lg">No reviews yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
