import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { brand } from "@/app/lib/content";
import Link from "next/link";

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Hero */}
        <section className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">{brand.name} Rewards</h1>
          <p className="mt-4 text-foreground/80">
            Sip, earn, redeem. Join our rewards to unlock free drinks, birthday treats, and more.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#join" className="inline-flex items-center rounded-full bg-primary text-white px-6 py-3 text-sm font-medium hover:opacity-90">
              Join now
            </a>
            <Link href="/sign-in" className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary">
              Sign in
            </Link>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-16 md:mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
            <p className="mt-4 text-foreground/80">Three simple steps to start earning on every sip.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Image src="/logo/createLogo.png" alt="Create account" width={40} height={40} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">1. Create your account</h3>
              <p className="mt-2 text-sm text-foreground/80">Sign up in seconds to start collecting points.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Image src="/logo/rewardLogo.png" alt="Order and earn" width={48} height={48} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">2. Order and earn</h3>
              <p className="mt-2 text-sm text-foreground/80">Earn points on handcrafted drinks and food.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Image src="/logo/ReddemLogo.png" alt="Redeem rewards" width={48} height={48} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">3. Redeem for treats</h3>
              <p className="mt-2 text-sm text-foreground/80">Use points for free drinks, size upgrades, and more.</p>
            </div>
          </div>
        </section>

        {/* Earn and redeem */}
        <section id="join" className="mt-16 md:mt-24">
          <div className="rounded-3xl border border-border bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 md:p-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-semibold">Earn faster. Sip happier.</h3>
              <p className="mt-3 text-foreground/80">
                Every purchase gets you closer to a free favorite. Members also enjoy birthday treats and exclusive drops.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-start gap-2"><span>⭐</span><span>1 point per ₹1 spent</span></li>
                <li className="flex items-start gap-2"><span>⭐</span><span>Free birthday drink</span></li>
                <li className="flex items-start gap-2"><span>⭐</span><span>Early access to seasonal specials</span></li>
                <li className="flex items-start gap-2"><span>⭐</span><span>Exclusive member offers</span></li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center rounded-full bg-primary text-white px-6 py-3 text-sm font-medium hover:opacity-90">Join for free</a>
                <a href="#" className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary">View terms</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}