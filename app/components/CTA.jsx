import { cta } from "@/app/lib/content";

export default function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="rounded-3xl border border-border bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold">{cta.title}</h3>
        <p className="mt-3 text-foreground/80">{cta.subtitle}</p>
        <a href={cta.action.href} className="mt-6 inline-flex items-center rounded-full bg-primary text-white px-6 py-3 text-sm font-medium hover:opacity-90">
          {cta.action.label}
        </a>
      </div>
    </section>
  );
}