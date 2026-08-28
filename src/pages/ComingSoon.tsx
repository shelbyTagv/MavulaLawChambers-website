import { useEffect } from "react";
import { contactInfo } from "../data/contact";

export default function ComingSoon() {
  useEffect(() => {
    document.title = "Coming Soon | Mavula & Co. Law Chambers";

    return () => {
      document.title = "Mavula & Co. Law Chambers";
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,150,12,0.12),transparent_42%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gold/5 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center sm:px-8 lg:px-12">
        <img
          src="/assets/images/mavula-logo.jpeg"
          alt="Mavula & Co. crest"
          className="mb-6 h-24 w-24 rounded-full border border-gold/40 bg-black/40 object-cover shadow-[0_0_35px_rgba(201,150,12,0.25)] sm:h-28 sm:w-28"
        />

        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold tracking-[0.12em] text-gold sm:text-4xl md:text-5xl">
            MAVULA &amp; CO.
          </h1>
          <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.58em] text-white/75 sm:text-xs">
            LAW CHAMBERS
          </p>
        </div>

        <div className="mb-8 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <h2 className="coming-soon-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          COMING SOON
        </h2>

        <div className="mt-6 h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent sm:w-48" />

        <p className="mt-8 max-w-2xl text-base text-white/75 sm:text-lg">
          Our new website is being crafted. We&apos;ll be live shortly.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center justify-center rounded-full border border-gold/60 bg-gold/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-gold transition-colors duration-300 hover:bg-gold/10"
          >
            {contactInfo.phone}
          </a>

          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center justify-center rounded-full px-7 py-3 text-sm uppercase tracking-[0.12em]"
          >
            Online Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
