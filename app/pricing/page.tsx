import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for web development services. Choose the right plan for your project — Starter, Professional, or Enterprise.",
};

const plans = [
  {
    name: "Starter",
    price: "$299",
    description: "Perfect for small businesses and personal websites.",
    color: "#06B6D4",
    badge: null,
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Contact Form",
      "Basic SEO",
      "1 Month Support",
      "Source Code",
      "Deployment to Vercel",
    ],
    notIncluded: ["Custom Backend", "Database Integration", "Admin Dashboard", "Advanced Animations"],
  },
  {
    name: "Professional",
    price: "$799",
    description: "Ideal for growing businesses that need a full-stack solution.",
    color: "#2563EB",
    badge: "Most Popular",
    features: [
      "Up to 15 Pages",
      "Custom Design",
      "Full-Stack Development",
      "Database Integration",
      "Authentication",
      "Admin Dashboard",
      "Advanced SEO",
      "Performance Optimization",
      "3 Months Support",
      "Source Code",
      "Deployment Included",
    ],
    notIncluded: ["Complex Integrations", "Multi-language"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations needing complex, scalable systems.",
    color: "#7C3AED",
    badge: "Best Value",
    features: [
      "Unlimited Pages",
      "Custom Architecture",
      "Microservices",
      "Advanced Database",
      "Complex Integrations",
      "Payment Gateways",
      "Multi-language",
      "Real-time Features",
      "Advanced Analytics",
      "Security Hardening",
      "6 Months Support",
      "Priority Response",
      "Full Documentation",
    ],
    notIncluded: [],
  },
];

const comparison = [
  { feature: "Responsive Design", starter: true, professional: true, enterprise: true },
  { feature: "Contact Form", starter: true, professional: true, enterprise: true },
  { feature: "SEO Optimization", starter: "Basic", professional: "Advanced", enterprise: "Advanced+" },
  { feature: "Database Integration", starter: false, professional: true, enterprise: true },
  { feature: "User Authentication", starter: false, professional: true, enterprise: true },
  { feature: "Admin Dashboard", starter: false, professional: true, enterprise: true },
  { feature: "Payment Gateway", starter: false, professional: false, enterprise: true },
  { feature: "Real-time Features", starter: false, professional: false, enterprise: true },
  { feature: "Source Code", starter: true, professional: true, enterprise: true },
  { feature: "Support Duration", starter: "1 Month", professional: "3 Months", enterprise: "6 Months" },
];

function Check() {
  return (
    <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function X() {
  return (
    <svg className="w-5 h-5 text-muted-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function PricingPage() {
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
            Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Simple,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
              Transparent Pricing
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            No hidden fees. Choose the plan that fits your project. Every project includes clean, maintainable code and professional support.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border-2 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.badge === "Most Popular"
                    ? "border-[#2563EB] bg-gradient-to-b from-[#2563EB]/5 to-transparent shadow-xl shadow-[#2563EB]/10"
                    : "border-border/50 bg-card"
                }`}
              >
                {plan.badge && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                    style={{ backgroundColor: plan.color }}
                  >
                    {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1" style={{ color: plan.color }}>
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-extrabold mb-2">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <a
                  href="/contact"
                  className="flex items-center justify-center w-full py-3 px-6 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 mb-8"
                  style={{ backgroundColor: plan.color }}
                >
                  Get Started →
                </a>

                <div className="space-y-3">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm">
                      <Check />
                      <span>{feat}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <X />
                      <span className="line-through opacity-60">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-extrabold text-center mb-10">
            Feature{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
              Comparison
            </span>
          </h2>
          <div className="rounded-2xl border border-border/50 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-muted/30">
                  <th className="px-6 py-4 text-left text-sm font-bold">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-[#06B6D4]">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-[#2563EB]">Professional</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-[#7C3AED]">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-border/30 ${i % 2 === 0 ? "" : "bg-muted/10"}`}>
                    <td className="px-6 py-4 text-sm font-medium">{row.feature}</td>
                    {[row.starter, row.professional, row.enterprise].map((val, j) => (
                      <td key={j} className="px-6 py-4 text-center text-sm">
                        {typeof val === "boolean" ? (
                          val ? <Check /> : <X />
                        ) : (
                          <span className="text-muted-foreground">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white">
            <h2 className="text-3xl font-extrabold mb-4">Have a Custom Budget?</h2>
            <p className="text-blue-100 mb-8">Let&apos;s talk and find a solution that fits your needs and budget.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-[#2563EB] font-bold hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
