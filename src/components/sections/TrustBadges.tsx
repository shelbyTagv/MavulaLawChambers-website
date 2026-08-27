export default function TrustBadges() {
  const badges = [
    {
      icon: (
        <img
          src="/assets/images/law-society-zimbabwe.jpeg"
          alt="Law Society of Zimbabwe"
          className="w-16 h-16 object-contain"
        />
      ),
      caption: "Member",
      layout: "horizontal" as const,
    },
    {
      icon: (
        <img
          src="/assets/images/attorneys.png"
          alt="Law Society of Zimbabwe"
          className="w-16 h-16 object-contain"
        />
      ),
      caption: "Expert Attorneys",
      layout: "vertical" as const,
    },
    {
      icon: (
        <img
          src="/assets/images/success.png"
          alt="Law Society of Zimbabwe"
          className="w-16 h-16 object-contain"
        />
      ),
      caption: "Consistent Success",
      layout: "vertical" as const,
    },
    {
      icon: (
        <img
          src="/assets/images/support.png"
          alt="Law Society of Zimbabwe"
          className="w-16 h-16 object-contain"
        />
      ),
      caption: "Optimum Support",
      layout: "vertical" as const,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-brand-dark border-y border-gray-800">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 group ${badge.layout === "horizontal"
                ? "flex-row justify-center"
                : "flex-col justify-center"
                }`}
            >
              <div className="transition-transform duration-300 group-hover:scale-110 shrink-0">
                {badge.icon}
              </div>
              <p
                className={`text-gold font-heading font-semibold text-sm sm:text-base uppercase tracking-wider ${badge.layout === "horizontal" ? "text-left" : "text-center"
                  }`}
              >
                {badge.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}