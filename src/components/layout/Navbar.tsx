import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { contactInfo } from "../../data/contact";
import SearchBar from "./SearchBar";

const navLinks = [
  { label: "About Us", path: "/about" },
  { label: "Our Attorneys", path: "/attorneys" },
  { label: "Our Services", path: "/services" },
  { label: "News & Articles", path: "/news" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-brand-black">
      {/* Top bar — logo/name left, contact block right */}
      <div className="section-container py-4 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4">
        {/* Logo + Firm name */}
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Mavula & Co. Home">
          <img
            src="/assets/images/mavula-logo.jpeg"
            alt="Mavula & Co. Law Chambers Logo"
            className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
          />
          <div>
            <h1 className="text-2xl lg:text-3xl font-heading text-white tracking-wide leading-tight whitespace-nowrap">
              MAVULA & CO.
            </h1>
            <p className="text-xs lg:text-sm text-white font-body tracking-[0.15em] uppercase mt-1">
              Law Chambers
            </p>
          </div>
        </Link>

        {/* Contact block — two aligned columns */}
        <div className="flex items-start gap-8 lg:gap-10 shrink-0">
          <div className="flex flex-col items-start gap-2">
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black text-xs lg:text-sm font-bold uppercase tracking-wide px-4 py-2 rounded-sm hover:bg-gold-dark transition-colors whitespace-nowrap"
            >
              Online Consultation
            </a>
            <span className="text-white text-xs lg:text-sm font-bold whitespace-nowrap">
              {contactInfo.hours}
            </span>
          </div>

          <div className="flex flex-col items-start gap-2 pt-1 lg:pt-2">
            <span className="text-white text-sm lg:text-base font-bold whitespace-nowrap">
              {contactInfo.phone}
            </span>
            <span className="text-white text-xs lg:text-sm font-bold whitespace-nowrap">
              Voip {contactInfo.voip}
            </span>
          </div>
        </div>
      </div>

      {/* Full-width gold nav strip */}
      <nav className="bg-gold w-full" aria-label="Main navigation">
        <div className="section-container flex items-center justify-between">
          <ul className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-5 py-3 text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${location.pathname === link.path
                    ? "bg-black/15 text-black"
                    : "text-black hover:bg-black/10"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search — subtle, tucked at the end of the gold strip */}
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          {/* Mobile: hamburger + search */}
          <div className="lg:hidden flex items-center justify-between w-full py-2">
            <button
              onClick={toggleMobileMenu}
              className="flex items-center justify-center w-10 h-10 text-black"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            <SearchBar />
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <ul className="bg-gold-dark border-t border-black/10">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${location.pathname === link.path
                    ? "bg-black/20 text-black"
                    : "text-black hover:bg-black/10"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}