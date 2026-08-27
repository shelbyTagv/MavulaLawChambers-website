interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 to-brand-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />

      <div className="section-container relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
          <span className="gold-gradient-text">{title}</span>
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-body">
            {subtitle}
          </p>
        )}
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}
