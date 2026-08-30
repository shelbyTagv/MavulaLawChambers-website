import { Link } from "react-router-dom";
import type { NewsItem } from "../../types";
import { formatDate } from "../../utils/dateFormatter";

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  const isNotice = item.type === "notice";

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
      </div>

      {/* Text content - separate block below image, no overlap */}
      <div className="p-4 flex flex-1 flex-col">
        {/* Title and date header */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-white font-heading font-semibold text-lg group-hover:text-gold transition-colors flex-1">
            {isNotice ? (
              <a href={item.pdfUrl} download target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            ) : (
              <Link to={`/news/${item.id}`}>{item.title}</Link>
            )}
          </h3>
          <span className="text-xs text-gray-400 font-body whitespace-nowrap">
            {formatDate(item.date)}
          </span>
        </div>

        {/* Category badge */}
        {item.category && (
          <span className="text-xs text-gold uppercase tracking-wide mb-2">{item.category}</span>
        )}

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
