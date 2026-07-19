import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Web development articles, tutorials, and insights by Shikur Ebrahim Muhammed.",
};

const posts = [
  {
    title: "Building a Full Stack App with Next.js 15 and Supabase",
    excerpt: "A comprehensive guide to building a production-ready full stack application using the latest Next.js 15 App Router with Supabase as your backend.",
    category: "Tutorial",
    readTime: "12 min read",
    date: "July 2025",
    tags: ["Next.js", "Supabase", "TypeScript"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
    slug: "nextjs-supabase-full-stack",
  },
  {
    title: "Why TypeScript is a Game Changer for Large React Projects",
    excerpt: "Exploring how TypeScript prevents bugs, improves developer experience, and makes your React codebase much easier to maintain at scale.",
    category: "Opinion",
    readTime: "7 min read",
    date: "June 2025",
    tags: ["TypeScript", "React", "Best Practices"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60",
    slug: "typescript-react-game-changer",
  },
  {
    title: "Prisma + PostgreSQL: The Perfect ORM for Next.js",
    excerpt: "Learn how to set up Prisma with PostgreSQL in a Next.js project, write your schema, run migrations, and query data efficiently.",
    category: "Tutorial",
    readTime: "10 min read",
    date: "May 2025",
    tags: ["Prisma", "PostgreSQL", "Next.js"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=60",
    slug: "prisma-postgresql-nextjs",
  },
  {
    title: "Mastering Tailwind CSS: Advanced Techniques",
    excerpt: "Go beyond the basics with Tailwind CSS — learn about custom design systems, plugins, animations, and advanced responsive patterns.",
    category: "Tutorial",
    readTime: "8 min read",
    date: "April 2025",
    tags: ["Tailwind CSS", "CSS", "Design"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
    slug: "mastering-tailwind-css",
  },
  {
    title: "Framer Motion: Add Life to Your React Apps",
    excerpt: "A complete guide to using Framer Motion for page transitions, scroll animations, hover effects, and complex animation sequences.",
    category: "Tutorial",
    readTime: "9 min read",
    date: "March 2025",
    tags: ["Framer Motion", "Animation", "React"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60",
    slug: "framer-motion-react",
  },
  {
    title: "How to Freelance as a Web Developer in Africa",
    excerpt: "My personal journey and practical tips for building a successful freelance web development career as an African developer.",
    category: "Career",
    readTime: "11 min read",
    date: "February 2025",
    tags: ["Freelancing", "Career", "Africa"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60",
    slug: "freelance-web-developer-africa",
  },
];

const categoryColors: Record<string, string> = {
  Tutorial: "#2563EB",
  Opinion: "#7C3AED",
  Career: "#10B981",
  News: "#F59E0B",
};

export default function BlogPage() {
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
            Blog & Articles
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Thoughts &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
              Tutorials
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I write about web development, TypeScript, React, and my journey as a freelance developer from Ethiopia.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Featured Post */}
          <div className="mb-12">
            <div className="group rounded-3xl overflow-hidden border border-border/50 bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 lg:grid lg:grid-cols-2">
              <div className="overflow-hidden h-64 lg:h-auto">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-3 py-1 text-xs font-bold rounded-full text-white"
                    style={{ backgroundColor: categoryColors[posts[0].category] || "#2563EB" }}
                  >
                    {posts[0].category}
                  </span>
                  <span className="text-xs text-muted-foreground">{posts[0].readTime}</span>
                  <span className="text-xs text-muted-foreground">{posts[0].date}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold mb-4 group-hover:text-[#2563EB] transition-colors duration-200">
                  {posts[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {posts[0].tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Rest of Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => {
              const color = categoryColors[post.category] || "#2563EB";
              return (
                <article
                  key={post.slug}
                  className="group rounded-2xl overflow-hidden border border-border/50 bg-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="px-2.5 py-1 text-xs font-bold rounded-full text-white"
                        style={{ backgroundColor: color }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-[#2563EB] transition-colors duration-200 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs rounded-full border"
                            style={{ borderColor: `${color}30`, color, backgroundColor: `${color}10` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
