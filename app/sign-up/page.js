import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Create Account | BrewMate",
  description: "Join BrewMate to start earning rewards on every order.",
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <header className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Create your account</h1>
          <p className="mt-4 text-foreground/80">Sign up in seconds to start collecting points.</p>
        </header>

        <section className="mt-12 max-w-md mx-auto rounded-2xl border border-border bg-card p-6">
          <form className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Full name</label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="Alex Doe" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <input id="password" name="password" type="password" autoComplete="new-password" placeholder="Create a strong password" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="confirm" className="block text-sm font-medium">Confirm password</label>
              <input id="confirm" name="confirm" type="password" autoComplete="new-password" placeholder="Re-enter password" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-white px-5 py-2.5 text-sm font-medium hover:opacity-90">Create account</button>
          </form>

          <p className="mt-4 text-center text-sm text-foreground/80">
            Already have an account? <Link href="/sign-in" className="text-primary hover:opacity-80">Sign in</Link>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}