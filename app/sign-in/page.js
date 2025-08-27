import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Sign In | BrewMate",
  description: "Access your BrewMate account to earn and redeem rewards.",
};

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <header className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Sign in</h1>
          <p className="mt-4 text-foreground/80">Welcome back! Sign in to continue earning rewards.</p>
        </header>

        <section className="mt-12 max-w-md mx-auto rounded-2xl border border-border bg-card p-6">
          <form className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" placeholder="••••••••" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="rounded border-border bg-background" />
                <span className="text-foreground/80">Remember me</span>
              </label>
              <a href="#" className="text-primary hover:opacity-80">Forgot password?</a>
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-white px-5 py-2.5 text-sm font-medium hover:opacity-90">Sign in</button>
          </form>

          <p className="mt-4 text-center text-sm text-foreground/80">
            Don’t have an account? <Link href="/sign-up" className="text-primary hover:opacity-80">Sign up</Link>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}