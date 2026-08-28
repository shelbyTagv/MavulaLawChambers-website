import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import { IS_COMING_SOON } from "./config/siteConfig";
import ComingSoon from "./pages/ComingSoon";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurAttorneys from "./pages/OurAttorneys";
import OurServices from "./pages/OurServices";
import NewsAndInsights from "./pages/NewsAndInsights";
import NewsDetail from "./pages/NewsDetail";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  if (IS_COMING_SOON) {
    return <ComingSoon />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-black text-white selection:bg-gold selection:text-black">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/attorneys" element={<OurAttorneys />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/news" element={<NewsAndInsights />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} /> {/* Fallback route */}
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
