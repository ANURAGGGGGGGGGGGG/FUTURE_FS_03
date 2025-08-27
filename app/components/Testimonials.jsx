import { testimonials } from "@/app/lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">What builders say</h2>
        <p className="mt-4 text-foreground/80">Used by teams who prioritize speed, consistency, and polish.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm">“{t.quote}”</p>
            <footer className="mt-4 text-xs text-foreground/70">{t.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}