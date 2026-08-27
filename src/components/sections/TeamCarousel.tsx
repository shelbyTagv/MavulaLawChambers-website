import { teamMembers } from "../../data/team";
import Carousel from "../ui/Carousel";

export default function TeamCarousel() {
  return (
    <section className="py-16 sm:py-20 bg-brand-black">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
            Our <span className="gold-gradient-text">Team</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <Carousel>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-8 lg:px-16"
            >
              {/* Photo */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-gold/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={member.photo}
                  alt={`${member.name} - ${member.title}`}
                  className="relative w-full max-w-md mx-auto h-80 sm:h-96 object-cover rounded-lg shadow-2xl shadow-black/50"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <p className="text-gold text-sm font-body uppercase tracking-[0.2em] mb-2">
                  {member.title}
                </p>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6">
                  {member.name}
                </h3>

                {member.quote && (
                  <blockquote className="relative pl-6 border-l-2 border-gold">
                    <svg
                      className="absolute -top-2 -left-1 w-8 h-8 text-gold/20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                    </svg>
                    <p className="text-gray-300 font-body text-sm sm:text-base leading-relaxed italic">
                      {member.quote}
                    </p>
                  </blockquote>
                )}

                {member.bio && (
                  <p className="text-gray-300 font-body text-sm sm:text-base leading-relaxed">
                    {member.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
