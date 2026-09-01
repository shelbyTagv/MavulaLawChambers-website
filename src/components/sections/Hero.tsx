export default function Hero() {
  const scrollToContent = () => {
    const target = document.getElementById("trust-badges");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.8, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Hero image */}
      <img
        src="/assets/images/hero-lex-non-scripta.png"
        alt="Attorney reading Lex Non Scripta in a law library with Veritas Aequitas Justitia on the wall"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="section-container">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-4 animate-fade-in">
              MAVULA &amp; CO.
              <br />
              <span className="gold-gradient-text">LAW CHAMBERS</span>
            </h1>
            <div className="w-20 h-1 bg-gold mb-6" />
            <p className="text-gold text-lg sm:text-xl font-heading font-semibold tracking-[0.15em] mb-4">
              TRUSTED. DILIGENT. DETERMINED.
            </p>
            <p className="text-gray-300 text-base sm:text-lg font-body max-w-lg">
              We are not just lawyers, we are your winning team.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={scrollToContent}
        aria-label="Scroll down to learn more"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center group cursor-pointer focus:outline-none transition-all duration-300"
      >
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold/80 group-hover:text-gold font-heading font-semibold mb-2 transition-colors duration-300 select-none">
          Scroll Down
        </span>
        <div className="w-5 h-8 sm:w-6 sm:h-9 border-2 border-gold/60 group-hover:border-gold rounded-full flex justify-center p-1 transition-colors duration-300 shadow-md shadow-black/50">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
        <svg
          className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors duration-300 -mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </section>
  );
}

