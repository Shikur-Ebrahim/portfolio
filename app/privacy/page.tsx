import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Shikur Ebrahim Muhammed portfolio website.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl py-20">
        <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10 text-sm">Last updated: July 2025</p>

        <div className="prose dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you use the contact form on this website, we collect the information you provide, including your name, email address, phone number (optional), company name (optional), and message. We also collect your email address if you subscribe to our newsletter.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information you provide to respond to your inquiries, discuss project requirements, and send newsletter updates (only if you subscribed). We do not sell, rent, or share your personal information with third parties.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">3. Data Storage</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data is stored securely using Supabase, a cloud database platform with enterprise-grade security. All data is encrypted in transit and at rest.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">4. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to request access to, correction of, or deletion of your personal data at any time. To exercise these rights, please contact us at the email provided on our contact page.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">5. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this privacy policy, please <Link href="/contact" className="text-[#2563EB] hover:underline">contact me</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
