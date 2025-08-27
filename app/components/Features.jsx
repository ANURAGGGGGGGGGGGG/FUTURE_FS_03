import Image from "next/image";
import { features } from "@/app/lib/content";

export default function Features() {
  return (
    <section id="rewards" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">What makes BrewMate special</h2>
        <p className="mt-4 text-foreground/80">Handcrafted drinks, thoughtful sourcing, and perks you’ll love.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((it) => (
          <div key={it.title} className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-sm">
            <div className="flex items-center gap-3">
              <Image src={it.icon} alt="" width={24} height={24} />
              <h3 className="text-lg font-semibold">{it.title}</h3>
            </div>
            <p className="mt-3 text-sm text-foreground/80">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}