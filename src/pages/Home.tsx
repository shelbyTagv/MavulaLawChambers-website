import Hero from "../components/sections/Hero";
import TrustBadges from "../components/sections/TrustBadges";
import TeamCarousel from "../components/sections/TeamCarousel";
import ExpertiseGrid from "../components/sections/ExpertiseGrid";
import NewsGrid from "../components/sections/NewsGrid";
import ReviewsGrid from "../components/sections/ReviewsGrid";
import Seo from "../components/Seo";
import { legalServiceSchema, pageMeta } from "../seo/siteMeta";

export default function Home() {
  return (
    <>
      <Seo
        title={pageMeta.home.title}
        description={pageMeta.home.description}
        path="/"
        structuredData={legalServiceSchema}
      />
      <main>
        <Hero />
        <TrustBadges />
        <TeamCarousel />
        <ExpertiseGrid />
        <NewsGrid />
        <ReviewsGrid />
      </main>
    </>
  );
}
