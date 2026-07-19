import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Shikur Ebrahim Muhammed portfolio website.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl py-20">
        <h1 className="text-4xl font-extrabold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-10 text-sm">Last updated: July 2025</p>

        <div className="space-y-8">
          {[
            {
              title: "1. Services",
              text: "Shikur Ebrahim Muhammed provides web development and design services including but not limited to website creation, web application development, API development, and website maintenance. Services are delivered as agreed upon in writing prior to commencement.",
            },
            {
              title: "2. Payments",
              text: "A 50% deposit is required before work begins. The remaining 50% is due upon project completion before final delivery. All payments are non-refundable once work has begun, unless otherwise agreed in writing.",
            },
            {
              title: "3. Intellectual Property",
              text: "Upon full payment, the client owns the final deliverables. Shikur retains the right to showcase the work in his portfolio unless the client requests otherwise in writing.",
            },
            {
              title: "4. Revisions",
              text: "Each project includes a set number of revision rounds as specified in the project proposal. Additional revisions beyond this scope will be billed at an hourly rate.",
            },
            {
              title: "5. Confidentiality",
              text: "Any confidential information shared during the project will be kept strictly confidential and not disclosed to third parties.",
            },
            {
              title: "6. Liability",
              text: "We are not liable for any indirect or consequential damages arising from the use of the delivered products. Our total liability shall not exceed the amount paid for the services.",
            },
          ].map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.text}</p>
            </section>
          ))}
          <section>
            <h2 className="text-xl font-bold mb-3">7. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For any questions about these terms, please <Link href="/contact" className="text-[#2563EB] hover:underline">contact me</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
