import Hero from "../components/sections/Hero";
import TrustBadges from "../components/sections/TrustBadges";
import TeamCarousel from "../components/sections/TeamCarousel";
import ExpertiseGrid from "../components/sections/ExpertiseGrid";
import NewsGrid from "../components/sections/NewsGrid";
import ReviewsGrid from "../components/sections/ReviewsGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <TeamCarousel />
      <ExpertiseGrid />
      <NewsGrid />
      <ReviewsGrid />
    </main>
  );
}
