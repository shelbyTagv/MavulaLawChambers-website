import { useRef } from "react";
import { expertiseAreas } from "../../data/expertise";

export default function ExpertiseGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-brand-dark">
      <div className="section-container">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
              Our <span className="gold-gradient-text">Expertise</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold" />
          </div>
          <button
            onClick={scrollRight}
            className="w-10 h-10 sm:w-12 sm:h-12 border border-gold/40 hover:border-gold hover:bg-gold/10 rounded-full flex items-center justify-center transition-all duration-300 group"
            aria-label="Scroll to see more expertise areas"
          >
            <svg
              className="w-5 h-5 text-gold group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Horizontally scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {expertiseAreas.map((area) => (
            <div
              key={area.id}
              className="flex-shrink-0 w-72 sm:w-80 snap-start group"
            >
              <div className="card-dark overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-lg font-heading font-bold text-white">
                    {area.title}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-sm font-body">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
