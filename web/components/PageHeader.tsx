export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-teal-50 border-b border-line">
      <div className="container py-14 md:py-20 max-w-4xl">
        <span className="tag-pill">{eyebrow}</span>
        <h1 className="section-title text-3xl md:text-4xl mt-4 text-ink leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-mute mt-4 leading-relaxed max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
