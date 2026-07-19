import type { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Shikur Ebrahim Muhammed — a Full Stack Web Developer from Ethiopia specializing in React, Next.js, Node.js, and modern web technologies.",
};

const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Material UI", "shadcn/ui"],
  Backend: ["Node.js", "Express.js", "REST APIs", "Authentication", "JWT", "OAuth"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Prisma"],
  Deployment: ["Vercel", "Netlify", "Railway", "Render", "Supabase"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
};

const timeline = [
  {
    year: "2021",
    title: "Started Learning Web Development",
    description: "Began my journey into web development with HTML, CSS, and JavaScript fundamentals.",
    type: "education",
  },
  {
    year: "2022",
    title: "Mastered React & Node.js",
    description: "Deep-dived into React.js and Node.js, building full-stack applications.",
    type: "milestone",
  },
  {
    year: "2023",
    title: "First Freelance Projects",
    description: "Started taking freelance projects — built websites for businesses, schools, and NGOs.",
    type: "work",
  },
  {
    year: "2024",
    title: "Advanced Full Stack Development",
    description: "Mastered Next.js, TypeScript, PostgreSQL, Supabase, and Prisma.",
    type: "milestone",
  },
  {
    year: "2025+",
    title: "Building for Real Clients",
    description: "Delivering production-ready web applications for clients across various industries.",
    type: "work",
  },
];

const skillColorMap: Record<string, string> = {
  Frontend: "#2563EB",
  Backend: "#7C3AED",
  Database: "#06B6D4",
  Deployment: "#10B981",
  Tools: "#F59E0B",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-[#2563EB]/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#7C3AED]/10 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium mb-6">
            About Me
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Passionate About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
              Building the Web
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I&apos;m Shikur Ebrahim Muhammed, a Full Stack Web Developer specializing in building modern web
            applications using React, Next.js, Node.js, PostgreSQL, Supabase, Prisma, and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Mission",
                icon: "🎯",
                text: "To help businesses and organizations transform their ideas into beautiful, fast, and scalable web applications that drive growth.",
                color: "#2563EB",
              },
              {
                title: "Vision",
                icon: "🚀",
                text: "To become a leading Full Stack Developer in Africa, known for delivering world-class digital products that make a real impact.",
                color: "#7C3AED",
              },
              {
                title: "Values",
                icon: "💎",
                text: "Quality over quantity. I believe in writing clean, maintainable code and building long-term relationships with clients based on trust and results.",
                color: "#06B6D4",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: item.color }}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
                Journey
              </span>
            </h2>
            <p className="text-muted-foreground">A timeline of my learning and professional growth.</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2563EB] to-[#7C3AED]" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 ml-2">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border-2 border-[#2563EB] bg-background flex items-center justify-center text-xs font-bold text-[#2563EB] z-10 relative">
                      {item.year.slice(2)}
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="p-6 rounded-2xl border border-border/50 bg-card hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest">
                          {item.year}
                        </span>
                        <span className="px-2 py-0.5 text-xs rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
                Skills
              </span>
            </h2>
            <p className="text-muted-foreground">Technologies I work with professionally.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => {
              const color = skillColorMap[category];
              return (
                <div
                  key={category}
                  className="p-6 rounded-2xl border border-border/50 bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ borderTop: `3px solid ${color}` }}
                >
                  <h3 className="text-lg font-bold mb-4" style={{ color }}>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full border"
                        style={{
                          borderColor: `${color}40`,
                          backgroundColor: `${color}10`,
                          color,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
