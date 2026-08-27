import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { newsItems } from "../data/news";

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();

  // Look up article by id or slug
  const article = newsItems.find(
    (item) => item.id.toString() === id || item.slug === id
  );

  // Update document title when article changes
  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Mavula & Co. Law Chambers`;
    } else {
      document.title = "Article Not Found | Mavula & Co. Law Chambers";
    }
  }, [article]);

  // Related articles (all except current)
  const relatedArticles = article
    ? newsItems.filter((item) => item.id !== article.id).slice(0, 3)
    : [];

  if (!article) {
    return (
      <main className="py-20 bg-brand-black min-h-[60vh] flex items-center justify-center">
        <div className="section-container text-center">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-400 font-body mb-8">
            The article you are looking for does not exist or has been removed.
          </p>
          <Link
            to="/news"
            className="btn-gold inline-flex items-center gap-2 text-sm px-6 py-3"
          >
            ← Back to News & Insights
          </Link>
        </div>
      </main>
    );
  }

  // Split body into paragraphs
  const paragraphs = article.body.split("\n\n").filter(Boolean);

  return (
    <main className="bg-brand-black text-white py-12 sm:py-16">
      <div className="section-container max-w-4xl">
        {/* Back Link Top */}
        <div className="mb-8">
          <Link
            to="/news"
            className="text-gold hover:text-gold-light text-sm font-body font-semibold transition-colors inline-flex items-center gap-2 group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to News & Insights
          </Link>
        </div>

        {/* Header Metadata */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-4 text-xs font-body uppercase tracking-wider text-gray-400 mb-3">
            <span className="bg-gold/20 text-gold px-3 py-1 rounded border border-gold/30">
              {new Date(article.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            {article.author && <span>By {article.author}</span>}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
            {article.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-64 sm:h-96 lg:h-[420px] rounded-xl overflow-hidden mb-10 border border-gray-800 shadow-2xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Article Body Content */}
        <article className="prose prose-invert max-w-none space-y-6 text-gray-300 font-body text-base sm:text-lg leading-relaxed border-b border-gray-800 pb-12 mb-12">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </article>

        {/* Back Link Bottom */}
        <div className="flex justify-between items-center mb-16">
          <Link
            to="/news"
            className="btn-outline-gold text-sm px-6 py-2.5 inline-flex items-center gap-2"
          >
            ← Back to News & Insights
          </Link>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="pt-8 border-t border-gray-800">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">
              Related <span className="gold-gradient-text">Articles</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((item) => (
                <article key={item.id} className="card-dark group hover:-translate-y-1">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-heading font-bold text-white mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <Link
                      to={`/news/${item.id}`}
                      className="text-gold hover:text-gold-light text-xs font-body font-semibold transition-colors inline-flex items-center gap-1 mt-2"
                    >
                      Read Story →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
