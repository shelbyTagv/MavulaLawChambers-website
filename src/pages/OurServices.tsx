import { services } from "../data/services";
import PageHeader from "../components/ui/PageHeader";
import Seo from "../components/Seo";
import { pageMeta } from "../seo/siteMeta";

export default function OurServices() {
  return (
    <>
      <Seo title={pageMeta.services.title} description={pageMeta.services.description} path="/services" />
      <main>
        <PageHeader
          title="Our Services"
          subtitle="Comprehensive legal solutions tailored to your needs"
        />

        <section className="py-16 sm:py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="card-dark overflow-hidden group hover:-translate-y-1"
                >
                  <img
                    src={service.image}
                    alt={service.label}
                    className="h-56 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-gold transition-colors">
                      {service.label}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
