import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional web development services including business websites, e-commerce stores, management systems, and custom web applications.",
};

const services = [
  { title: "Business Website", icon: "🏢", description: "Professional, modern business websites that establish a strong online presence and convert visitors into clients.", tags: ["Design", "SEO", "Responsive"] },
  { title: "Portfolio Website", icon: "💼", description: "Stunning personal or creative portfolio websites to showcase your work and attract new opportunities.", tags: ["Design", "Animation", "Fast"] },
  { title: "Landing Page", icon: "🚀", description: "High-converting landing pages designed to generate leads and drive sales with clear CTAs.", tags: ["Conversion", "Speed", "A/B"] },
  { title: "School Management System", icon: "🏫", description: "Complete school management systems with student, teacher, grades, attendance, and parent portals.", tags: ["Dashboard", "Multi-role", "Reports"] },
  { title: "Hospital Management System", icon: "🏥", description: "Comprehensive hospital systems for patient records, appointments, billing, and staff management.", tags: ["HIPAA", "Secure", "Reports"] },
  { title: "Hotel Booking System", icon: "🏨", description: "Full-featured hotel booking platforms with room management, reservations, and payment integration.", tags: ["Booking", "Payments", "Calendar"] },
  { title: "Restaurant Website", icon: "🍽️", description: "Beautiful restaurant websites with online menus, table reservations, and ordering systems.", tags: ["Menu", "Booking", "Online Orders"] },
  { title: "E-commerce Store", icon: "🛒", description: "Powerful e-commerce platforms with product catalogs, cart, checkout, payments, and order management.", tags: ["Payments", "Cart", "Orders"] },
  { title: "Inventory Management", icon: "📦", description: "Smart inventory management systems to track stock, suppliers, sales, and generate reports.", tags: ["Stock", "Reports", "Alerts"] },
  { title: "CRM", icon: "🤝", description: "Customer relationship management systems to track leads, deals, and client communications.", tags: ["Leads", "Pipeline", "Analytics"] },
  { title: "ERP", icon: "⚙️", description: "Enterprise resource planning systems that integrate finance, HR, inventory, and operations.", tags: ["Finance", "HR", "Integrated"] },
  { title: "NGO Website", icon: "💚", description: "Impactful websites for NGOs, charities, and non-profits with donation and volunteer management.", tags: ["Donations", "Events", "Impact"] },
  { title: "Real Estate Website", icon: "🏠", description: "Real estate platforms with property listings, search filters, virtual tours, and agent contact.", tags: ["Listings", "Search", "Maps"] },
  { title: "Custom Dashboard", icon: "📊", description: "Beautiful, data-driven dashboards with charts, KPIs, and real-time data visualization.", tags: ["Charts", "Real-time", "Export"] },
  { title: "Admin Panel", icon: "🛡️", description: "Secure, role-based admin panels for managing your web application's data and users.", tags: ["RBAC", "Secure", "Clean UI"] },
  { title: "API Development", icon: "🔌", description: "Scalable REST APIs with authentication, rate limiting, documentation, and database integration.", tags: ["REST", "Auth", "Docs"] },
  { title: "Website Maintenance", icon: "🔧", description: "Ongoing website maintenance, performance optimization, security updates, and content management.", tags: ["Support", "Updates", "Security"] },
];

const categoryColors = ["#2563EB", "#7C3AED", "#06B6D4", "#10B981", "#F59E0B"];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-[#2563EB]/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#7C3AED]/10 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium mb-6">
            My Services
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            What I Can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
              Build For You
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From simple landing pages to complex enterprise applications — I provide end-to-end web development services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const color = categoryColors[i % categoryColors.length];
              return (
                <div
                  key={service.title}
                  className="group p-6 rounded-2xl border border-border/50 bg-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:border-opacity-50"
                  style={{ "--hover-color": color } as React.CSSProperties}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-all duration-300"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-[#2563EB] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-full"
                        style={{
                          backgroundColor: `${color}10`,
                          color: color,
                          border: `1px solid ${color}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white">
            <h2 className="text-3xl font-extrabold mb-4">Don&apos;t See What You Need?</h2>
            <p className="text-blue-100 mb-8">
              I can build almost anything. Let&apos;s discuss your custom project requirements.
            </p>
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
