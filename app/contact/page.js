import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us | BrewMate",
  description: "Get in touch with BrewMate for support, partnerships, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <header className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-foreground/80">We’d love to hear from you. Fill out the form below or reach us via email.</p>
        </header>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Send us a message</h2>
            <form className="mt-6 grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="How can we help?" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea id="message" name="message" rows={6} placeholder="Write your message here..." className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <button type="submit" className="inline-flex items-center rounded-full bg-primary text-white px-5 py-2.5 text-sm font-medium hover:opacity-90">Send message</button>
            </form>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Other ways to reach us</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="block font-medium">Email</span>
                <a href="mailto:support@brewmate.com" className="text-foreground/80 hover:text-primary">support@brewmate.com</a>
              </li>
              <li>
                <span className="block font-medium">Phone</span>
                <a href="tel:+918012345678" className="text-foreground/80 hover:text-primary">+91 80 1234 5678</a>
              </li>
              <li>
                <span className="block font-medium">Address</span>
                <p className="text-foreground/80">MG Road, Bengaluru, Karnataka 560001</p>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}