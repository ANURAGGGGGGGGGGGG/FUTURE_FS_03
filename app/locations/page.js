import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Locations | BrewMate",
  description: "Find a BrewMate location near you for pickup and in-store orders.",
};

const stores = [
  {
    name: "Downtown Roastery",
    address: "MG Road, Bengaluru, Karnataka 560001",
    phone: "+91 80 1234 5678",
    hours: "Mon–Fri 7am–9pm · Sat–Sun 8am–9pm",
    maps: "MG Road, Bengaluru, Karnataka 560001",
  },
  {
    name: "Uptown Espresso Bar",
    address: "Connaught Place, New Delhi, Delhi 110001",
    phone: "+91 11 2345 6789",
    hours: "Daily 8am–9pm",
    maps: "Connaught Place, New Delhi, Delhi 110001",
  },
  {
    name: "Riverside Cafe",
    address: "Bandra West, Mumbai, Maharashtra 400050",
    phone: "+91 22 3456 7890",
    hours: "Mon–Fri 7:30am–9pm · Sat–Sun 8am–9:30pm",
    maps: "Bandra West, Mumbai, Maharashtra 400050",
  },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Find a store</h1>
          <p className="mt-4 text-foreground/80">
            Order ahead and pick up at a BrewMate near you.
          </p>
        </header>

        {/* Search (placeholder) */}
        <div className="mt-10 max-w-xl mx-auto">
          <label htmlFor="search" className="sr-only">Search by city or PIN code</label>
          <div className="flex gap-2">
            <input
              id="search"
              type="text"
              placeholder="Search by city or PIN code"
              className="flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="inline-flex items-center rounded-full bg-primary text-white px-4 py-2 text-sm font-medium hover:opacity-90">
              Search
            </button>
          </div>
          <p className="mt-2 text-xs text-foreground/60">Search is a demo. For now, explore our featured locations below.</p>
        </div>

        {/* Stores grid */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((s) => (
            <div key={s.name} className="rounded-2xl border border-border bg-card p-6 flex flex-col">
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="mt-1 text-sm text-foreground/80">{s.address}</p>
              <p className="mt-1 text-sm text-foreground/80">{s.hours}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center rounded-full border border-border px-4 py-2 text-xs font-medium hover:border-primary hover:text-primary"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.maps)}`}
                  target="_blank" rel="noopener noreferrer"
                >
                  Get directions
                </a>
                <a
                  className="inline-flex items-center rounded-full bg-primary text-white px-4 py-2 text-xs font-medium hover:opacity-90"
                  href={`tel:${s.phone.replace(/[^+\d]/g, "")}`}
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Info banner */}
        <section className="mt-12">
          <div className="rounded-3xl border border-border bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 md:p-8 text-center">
            <p className="text-sm text-foreground/80">
              Looking for catering or group orders? Reach out via our Contact page and we’ll help you plan the perfect pickup.
            </p>
            <Link href="/contact" className="mt-4 inline-flex items-center rounded-full bg-primary text-white px-5 py-2.5 text-sm font-medium hover:opacity-90">Contact us</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}