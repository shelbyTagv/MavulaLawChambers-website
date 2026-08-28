export default function Hero() {
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
    </section>
  );
}
