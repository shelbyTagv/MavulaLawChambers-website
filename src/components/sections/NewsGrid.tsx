import { Link } from "react-router-dom";
import { newsItems } from "../../data/news";
import ScrollCarousel from "../ui/ScrollCarousel";
import NewsCard from "./NewsCard";

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

        <ScrollCarousel
          items={previewItems}
          renderItem={(item) => <NewsCard item={item} />}
          cardWidth={320}
          gap={24}
          showArrows={true}
          arrowLabel={{ prev: "Previous news", next: "Next news" }}
        />
      </div>
    </section>
  );
}
