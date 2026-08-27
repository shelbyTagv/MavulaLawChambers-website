import { teamMembers } from "../data/team";
import PageHeader from "../components/ui/PageHeader";

export default function OurAttorneys() {
  return (
    <main>
      <PageHeader title="Our Attorneys" subtitle="Meet the team behind Mavula & Co." />

      <section className="py-16 sm:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="card-dark p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start hover:-translate-y-1"
              >
                {/* Photo */}
                <div className="flex-shrink-0">
                  <img
                    src={member.photo}
                    alt={`${member.name} - ${member.title}`}
                    className="w-40 h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <p className="text-gold text-xs font-body uppercase tracking-[0.2em] mb-1">
                    {member.title}
                  </p>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">
                    {member.name}
                  </h2>

                  {member.quote && (
                    <blockquote className="pl-4 border-l-2 border-gold">
                      <p className="text-gray-300 font-body text-sm leading-relaxed italic">
                        &ldquo;{member.quote}&rdquo;
                      </p>
                    </blockquote>
                  )}

                  {member.bio && (
                    <p className="text-gray-300 font-body text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
