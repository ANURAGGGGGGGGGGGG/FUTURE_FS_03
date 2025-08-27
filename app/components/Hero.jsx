import { hero } from "@/app/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted to-background" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {hero.title}
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/80">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={hero.primaryCta.href} className="inline-flex items-center rounded-full bg-primary text-white px-5 py-2.5 text-sm font-medium hover:opacity-90">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}