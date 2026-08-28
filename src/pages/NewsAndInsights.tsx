import { Link } from "react-router-dom";
import { newsItems } from "../data/news";
import PageHeader from "../components/ui/PageHeader";
import Seo from "../components/Seo";
import { pageMeta } from "../seo/siteMeta";

export default function NewsAndInsights() {
  return (
    <>
      <Seo title={pageMeta.news.title} description={pageMeta.news.description} path="/news" />
      <main>
        <PageHeader title="News & Insights" subtitle="Stay informed with our latest updates" />

        <section className="py-16 sm:py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item) => (
                <article key={item.id} className="card-dark group hover:-translate-y-1">
                  <Link to={`/news/${item.id}`} className="block relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 left-3 bg-gold/90 text-black text-xs font-bold px-2 py-1 rounded">
                      {new Date(item.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </Link>
                  <div className="p-5">
                    {item.author && (
                      <p className="text-gold text-xs font-body uppercase tracking-wider mb-2">
                        By {item.author}
                      </p>
                    )}
                    <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-gold transition-colors">
                      <Link to={`/news/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 text-sm font-body mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Link
                      to={`/news/${item.id}`}
                      className="text-gold hover:text-gold-light text-sm font-body font-semibold transition-colors flex items-center gap-1 group/btn"
                    >
                      Read More
                      <svg
                        className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {newsItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400 font-body text-lg">No articles yet. Check back soon.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
