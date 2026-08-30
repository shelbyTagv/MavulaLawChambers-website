import { Link } from "react-router-dom";
import type { NewsItem } from "../../types";

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  const isNotice = item.type === "notice";
  const formattedDate = new Date(item.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="card-dark group hover:-translate-y-1 flex flex-col h-full">
      {/* Image container - position: relative for badge anchoring */}
      <div className="relative overflow-hidden">
        {isNotice ? (
          <a
            href={item.pdfUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-48 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </a>
        ) : (
          <Link to={`/news/${item.id}`} className="block w-full h-48 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </Link>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Date Badge - absolutely positioned INSIDE image container only */}
        <span className="absolute top-3 left-3 bg-gold text-black text-xs font-bold px-3 py-1 rounded">
          {formattedDate}
        </span>

        {/* Category Badge */}
        {item.category && (
          <span className="absolute top-3 right-3 bg-gold/80 text-black text-xs font-bold px-3 py-1 rounded">
            {item.category}
          </span>
        )}
      </div>

      {/* Text content - separate block below image, no overlap */}
      <div className="p-4 flex flex-1 flex-col">
        <h3 className="text-white font-heading font-semibold text-lg group-hover:text-gold transition-colors mb-2">
          {isNotice ? (
            <a href={item.pdfUrl} download target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          ) : (
            <Link to={`/news/${item.id}`}>{item.title}</Link>
          )}
        </h3>

        <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-2">{item.excerpt}</p>

        {/* Button - at bottom of card */}
        <div className="mt-auto">
          {isNotice ? (
            <a
              href={item.pdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light text-sm font-body font-semibold transition-colors flex items-center gap-1 group/btn"
            >
              Download PDF
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v12m0 0l-4-4m4 4l4-4M21 21H3"
                />
              </svg>
            </a>
          ) : (
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
          )}
        </div>
      </div>
    </article>
  );
}
