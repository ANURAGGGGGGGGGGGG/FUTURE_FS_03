import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms & Conditions | BrewMate",
  description: "Read the Terms & Conditions for using BrewMate's website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          <p className="mt-4 text-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <article className="prose prose-invert mt-12 max-w-3xl mx-auto text-sm leading-6">
          <section className="mb-8">
            <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing or using this website, the BrewMate app, or any related services, you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">2. Eligibility</h2>
            <p>
              You must be at least 13 years old (or the age of majority in your jurisdiction) to use our services. If you are under 18, you represent that you have permission from a parent or guardian.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">3. Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">4. Orders and Payments</h2>
            <ul className="list-disc pl-6">
              <li>Prices and availability are subject to change without notice.</li>
              <li>We reserve the right to refuse or cancel any order at our discretion.</li>
              <li>Refunds are handled according to our store policies and applicable law.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">5. Rewards Program</h2>
            <p>
              Participation in BrewMate Rewards is optional. Points, perks, and redemption rules may be updated or discontinued at any time. Points have no cash value and cannot be transferred or sold.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">6. Permitted Use</h2>
            <ul className="list-disc pl-6">
              <li>Do not misuse the website or app, including attempting to interfere with security or operations.</li>
              <li>Do not submit unlawful, infringing, or harmful content.</li>
              <li>Comply with all applicable laws and regulations.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">7. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and materials on this site are the property of BrewMate or its licensors and are protected by intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">8. Third-Party Links</h2>
            <p>
              This website may contain links to third-party sites. We are not responsible for the content or practices of those sites and provide links for convenience only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">9. Disclaimer of Warranties</h2>
            <p>
              The website and services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, express or implied.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, BrewMate shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">11. Changes to Terms</h2>
            <p>
              We may update these Terms & Conditions from time to time. The updated date will be indicated at the top of this page. Continued use constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">12. Contact Us</h2>
            <p>
              For questions about these Terms & Conditions, please contact us via the Contact link in the site footer.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}