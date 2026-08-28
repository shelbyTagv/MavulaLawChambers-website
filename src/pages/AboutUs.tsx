import PageHeader from "../components/ui/PageHeader";
import Seo from "../components/Seo";
import { pageMeta } from "../seo/siteMeta";
import { mission, values, valuesIntro, vision } from "../data/aboutContent";

export default function AboutUs() {
  return (
    <>
      <Seo title={pageMeta.about.title} description={pageMeta.about.description} path="/about" />
      <main>
        <PageHeader title="About Us" subtitle="Our Expertise is Yours" />

        <section className="py-16 sm:py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6">
                  <span className="gold-gradient-text">Trusted. Diligent. Determined.</span>
                </h2>
                <div className="space-y-4 text-gray-300 font-body leading-relaxed">
                  <p>
                    MAVULA & CO. Law Chambers is a Zimbabwean law firm dedicated to providing
                    sophisticated, commercially focused legal solutions to our clients. Our team
                    combines deep legal expertise with a global outlook to deliver results that matter.
                  </p>
                  <p>
                    We are not just lawyers, we are your winning team. Our commitment to excellence
                    drives everything we do — from criminal and civil litigation to estate management,
                    conveyancing, and beyond.
                  </p>
                  <p>
                    With a proven track record of consistent success, MAVULA & CO. stands as a trusted
                    partner for individuals, businesses, and institutions seeking reliable and effective
                    legal representation in Zimbabwe and across borders.
                  </p>
                </div>

                {/* Values */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { label: "Trusted", desc: "Built on integrity and client confidence" },
                    { label: "Diligent", desc: "Thorough in every case we undertake" },
                    { label: "Determined", desc: "Relentless pursuit of justice for our clients" },
                  ].map((value) => (
                    <div key={value.label} className="text-center p-4 border border-gray-800 rounded-lg hover:border-gold/40 transition-colors">
                      <h3 className="text-gold font-heading font-bold text-lg mb-2">{value.label}</h3>
                      <p className="text-gray-400 text-sm font-body">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-gold/20 to-transparent rounded-lg" />
                <img
                  src="/assets/images/hero-lex-non-scripta.jpg"
                  alt="Mavula & Co. Law Chambers legal excellence in Plumtree, Zimbabwe"
                  className="relative w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-brand-dark border-t border-gray-800">
          <div className="section-container">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="card-dark p-6">
                <h3 className="text-2xl font-heading font-bold text-gold mb-4">Vision</h3>
                <p className="text-gray-300 font-body leading-relaxed">{vision}</p>
              </div>

              <div className="card-dark p-6">
                <h3 className="text-2xl font-heading font-bold text-gold mb-4">Mission</h3>
                <p className="text-gray-300 font-body leading-relaxed">{mission}</p>
              </div>

              <div className="card-dark p-6 lg:col-span-1">
                <h3 className="text-2xl font-heading font-bold text-gold mb-4">Values</h3>
                <p className="mb-4 text-gray-300 font-body leading-relaxed">{valuesIntro}</p>
                <div className="grid grid-cols-1 gap-3">
                  {values.map((value) => (
                    <div key={value.id} className="rounded-lg border border-gray-800 bg-brand-black/40 p-3">
                      <h4 className="text-sm font-heading font-bold text-gold">{value.title}</h4>
                      <p className="mt-1 text-sm text-gray-300 font-body">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
