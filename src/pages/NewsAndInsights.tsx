import { newsItems } from "../data/news";
import PageHeader from "../components/ui/PageHeader";
import Seo from "../components/Seo";
import { pageMeta } from "../seo/siteMeta";
import ScrollCarousel from "../components/ui/ScrollCarousel";
import NewsCard from "../components/sections/NewsCard";

export default function NewsAndInsights() {
  const sortedItems = [...newsItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Seo title={pageMeta.news.title} description={pageMeta.news.description} path="/news" />
      <main>
        <PageHeader title="News & Insights" subtitle="Stay informed with our latest updates" />

        <section className="py-16 sm:py-20">
          <div className="section-container">
            {sortedItems.length > 0 ? (
              <ScrollCarousel
                items={sortedItems}
                renderItem={(item) => <NewsCard item={item} />}
                cardWidth={320}
                gap={24}
                showArrows={true}
                arrowLabel={{ prev: "Previous news", next: "Next news" }}
              />
            ) : (
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
