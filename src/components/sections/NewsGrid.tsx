import { Link } from "react-router-dom";
import { newsItems } from "../../data/news";

export default function NewsGrid() {
  const previewItems = [...newsItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-16 sm:py-20 bg-brand-black">
      <div className="section-container">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
              News & <span className="gold-gradient-text">Insights</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold" />
          </div>
          <Link
            to="/news"
            className="text-gold hover:text-gold-light text-sm font-body font-semibold transition-colors flex items-center gap-1"
          >
            View All
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item) => {
            const isNotice = item.type === "notice";
            return (
              <article key={item.id} className="card-dark group hover:-translate-y-1">
                {isNotice ? (
                  <a
                    href={item.pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative h-48 overflow-hidden"
                  >
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
                    {item.category && (
                      <span className="absolute top-3 right-3 bg-gold/80 text-black text-xs font-bold px-2 py-1 rounded">
                        {item.category}
                      </span>
                    )}
                  </a>
                ) : (
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
                    {item.category && (
                      <span className="absolute top-3 right-3 bg-gold/80 text-black text-xs font-bold px-2 py-1 rounded">
                        {item.category}
                      </span>
                    )}
                  </Link>
                )}

                <div className="p-5">
                  <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {isNotice ? (
                      <a href={item.pdfUrl} download target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    ) : (
                      <Link to={`/news/${item.id}`}>{item.title}</Link>
                    )}
                  </h3>
                  <p className="text-gray-400 text-sm font-body mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>
                  {isNotice ? (
                    <a
                      href={item.pdfUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-light text-sm font-body font-semibold transition-colors flex items-center gap-1 group/btn"
                    >
                      Download PDF
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M21 21H3" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      to={`/news/${item.id}`}
                      className="text-gold hover:text-gold-light text-sm font-body font-semibold transition-colors flex items-center gap-1 group/btn"
                    >
                      Read More
                      <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
