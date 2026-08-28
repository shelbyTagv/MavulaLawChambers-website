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
                  className="card-dark p-6 text-center group hover:-translate-y-1"
                >
                  <div className="mb-4 text-3xl leading-none text-gold">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-gold transition-colors">
                    {service.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
