import { expertiseAreas } from "../../data/expertise";
import ScrollCarousel from "../ui/ScrollCarousel";

export default function ExpertiseGrid() {
  return (
    <section className="py-16 sm:py-20 bg-brand-dark">
      <div className="section-container">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
              Our <span className="gold-gradient-text">Areas of Expertise</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold" />
          </div>
        </div>

        <ScrollCarousel
          items={expertiseAreas}
          renderItem={(area) => (
            <div className="card-dark overflow-hidden flex h-full flex-col group">
              {/* Image container with title overlay */}
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

              {/* Content section */}
              <div className="p-4 flex flex-1 flex-col">
                {area.description && (
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">{area.description}</p>
                )}
                {area.items && (
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm leading-relaxed">
                    {area.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
          cardWidth={320}
          gap={24}
          showArrows={true}
          arrowLabel={{ prev: "Previous expertise", next: "Next expertise" }}
        />
      </div>
    </section>
  );
}
