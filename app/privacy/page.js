import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | BrewMate",
  description: "Learn how BrewMate collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <article className="prose prose-invert mt-12 max-w-3xl mx-auto text-sm leading-6">
          <section className="mb-8">
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p>
              This Privacy Policy explains how BrewMate (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, discloses, and safeguards your information when you visit our website, use the BrewMate app, or interact with our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">2. Information We Collect</h2>
            <ul className="list-disc pl-6">
              <li><span className="font-medium">Personal Information:</span> name, email address, phone number, and account details you provide.</li>
              <li><span className="font-medium">Order & Payment Data:</span> items purchased and payment method details (processed via secure payment providers).</li>
              <li><span className="font-medium">Usage Data:</span> device information, browser type, pages viewed, and interactions with our services.</li>
              <li><span className="font-medium">Location Data:</span> if you grant permission, we may use your approximate location to find nearby stores.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6">
              <li>Provide and improve our products, services, and customer experience.</li>
              <li>Process orders, payments, and customer support requests.</li>
              <li>Personalize offers, rewards, and communications.</li>
              <li>Analyze usage to enhance performance and security.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">4. Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar technologies to remember preferences, keep you signed in, and measure site performance. You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">5. Sharing of Information</h2>
            <p>
              We may share information with trusted service providers (e.g., payment processors, analytics) to operate our services. We do not sell your personal information. We may disclose data if required by law or to protect rights, property, or safety.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">6. Data Retention</h2>
            <p>
              We retain personal information as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">7. Your Choices and Rights</h2>
            <ul className="list-disc pl-6">
              <li>Access, correct, or delete your personal information where applicable.</li>
              <li>Manage marketing preferences and unsubscribe from communications.</li>
              <li>Disable cookies via your browser settings.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">8. Children’s Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13 without appropriate consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">9. Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your information. However, no method of transmission or storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. The updated date will be shown at the top. Your continued use of the services indicates acceptance of the changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">11. Contact Us</h2>
            <p>
              For questions about this Privacy Policy, please contact us via the Contact link in the site footer.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}