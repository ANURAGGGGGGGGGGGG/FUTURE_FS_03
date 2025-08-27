import Image from "next/image";
import { menuHighlights } from "@/app/lib/content";

export default function MenuHighlights() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Menu highlights</h2>
        <p className="mt-4 text-foreground/80">Seasonal specials and everyday favorites.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuHighlights.map((item) => (
          <div key={item.name} className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image 
                src={item.image} 
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 flex items-center gap-4">
              <Image src={item.icon} alt="" width={32} height={32} />
              <div className="flex-1">
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="text-sm text-foreground/80">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}