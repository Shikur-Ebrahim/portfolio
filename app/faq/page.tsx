import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about my web development services, process, pricing, and timelines.",
};

const faqs = [
  {
    question: "What technologies do you use?",
    answer: "I specialize in a modern tech stack including React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, MongoDB, Supabase, Prisma, and Tailwind CSS. I choose the best tools based on your project's specific requirements.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Timeline depends on the complexity. A simple business website takes 1–2 weeks. A medium-complexity project (e-commerce, management system) takes 3–6 weeks. Enterprise-level applications can take 2–4 months. I always give you a clear timeline upfront.",
  },
  {
    question: "Do you work with clients outside of Ethiopia?",
    answer: "Absolutely! I work with clients globally. I communicate in English and am comfortable working across different time zones. All project communication and payments can be done remotely.",
  },
  {
    question: "What is your development process?",
    answer: "My process: 1) Discovery call to understand requirements, 2) Proposal and timeline agreement, 3) Design mockups for approval, 4) Development with regular updates, 5) Testing and QA, 6) Deployment and handover, 7) Post-launch support.",
  },
  {
    question: "Do you provide source code?",
    answer: "Yes, all plans include full source code ownership. You receive the complete codebase hosted on GitHub or delivered as a zip file. You own everything I build for you.",
  },
  {
    question: "Can you maintain my website after it's launched?",
    answer: "Yes! All plans include post-launch support. For ongoing maintenance, I offer monthly maintenance packages that include security updates, performance monitoring, content updates, and bug fixes.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "I accept international transfers (bank wire), PayPal, and cryptocurrency. For Ethiopian clients, I accept local bank transfers and mobile payments. I typically work with a 50% deposit upfront and 50% on completion.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "100% yes. Every website I build is fully responsive and works perfectly on all devices — mobile phones, tablets, laptops, and desktops. Mobile-first design is a standard part of my workflow.",
  },
  {
    question: "Do you help with SEO?",
    answer: "Yes. All my websites include on-page SEO best practices: proper meta tags, Open Graph, structured data, fast loading times, semantic HTML, sitemap.xml, and robots.txt. For advanced SEO campaigns, I can refer you to specialist partners.",
  },
  {
    question: "How do we communicate during the project?",
    answer: "I use Telegram, WhatsApp, or email for communication. I provide weekly progress updates and share staging environments for your review. You'll never be left wondering what's happening with your project.",
  },
];

export default function FAQPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-[#2563EB]/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#7C3AED]/10 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium mb-6">
            Got Questions?
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
              Questions
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Here are answers to the most common questions. If you have other questions, feel free to contact me directly.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border/50 bg-card overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/30 transition-colors duration-200 list-none">
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB] group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm border-t border-border/30 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center p-10 rounded-3xl bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 border border-[#2563EB]/20">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m happy to answer any other questions you may have.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-500/25"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
