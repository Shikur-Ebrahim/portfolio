"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Search, Filter } from "lucide-react";
import { getAllProjects } from "@/actions/projects";
import type { Project } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";

const DEMO_PROJECTS: Project[] = [
  {
    id: "1",
    title: "School Management System",
    slug: "school-management-system",
    description: "A complete school management system with student enrollment, attendance, grades, teacher portal, and parent dashboard built with Next.js and PostgreSQL.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=60",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    live_url: "https://example.com",
    github_url: "https://github.com/Shikur-Ebrahim",
    featured: true,
    created_at: new Date(),
  },
  {
    id: "2",
    title: "E-commerce Platform",
    slug: "ecommerce-platform",
    description: "A fully featured e-commerce store with product catalog, cart, Stripe payments, order management, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    live_url: "https://example.com",
    github_url: "https://github.com/Shikur-Ebrahim",
    featured: true,
    created_at: new Date(),
  },
  {
    id: "3",
    title: "Hotel Booking System",
    slug: "hotel-booking-system",
    description: "Modern hotel booking platform with room management, real-time availability, online reservations, and payment integration.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60",
    technologies: ["Next.js", "Supabase", "Prisma", "TypeScript", "Tailwind CSS"],
    live_url: "https://example.com",
    github_url: "https://github.com/Shikur-Ebrahim",
    featured: true,
    created_at: new Date(),
  },
  {
    id: "4",
    title: "NGO Website",
    slug: "ngo-website",
    description: "Impactful website for a non-profit organization with donation management, volunteer registration, event listings, and impact reports.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=60",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    live_url: "https://example.com",
    github_url: "https://github.com/Shikur-Ebrahim",
    featured: false,
    created_at: new Date(),
  },
  {
    id: "5",
    title: "Restaurant Ordering App",
    slug: "restaurant-ordering-app",
    description: "Digital restaurant platform with online menu, table reservations, food ordering system, and kitchen dashboard.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=60",
    technologies: ["React", "Express.js", "PostgreSQL", "Socket.io"],
    live_url: "https://example.com",
    github_url: "https://github.com/Shikur-Ebrahim",
    featured: true,
    created_at: new Date(),
  },
  {
    id: "6",
    title: "Real Estate Listings",
    slug: "real-estate-listings",
    description: "Real estate platform with property listings, advanced search, map integration, virtual tours, and agent contact system.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
    technologies: ["Next.js", "TypeScript", "Prisma", "Maps API", "Tailwind CSS"],
    live_url: "https://example.com",
    github_url: "https://github.com/Shikur-Ebrahim",
    featured: false,
    created_at: new Date(),
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "featured">("all");

  useEffect(() => {
    async function fetchProjects() {
      const result = await getAllProjects();
      if (result.success && result.data.length > 0) {
        setProjects(result.data);
      } else {
        setProjects(DEMO_PROJECTS);
      }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesFilter = filter === "all" || p.featured;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-[#2563EB]/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-[#7C3AED]/10 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium mb-6">
            Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
              Projects
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A collection of projects I&apos;ve built for clients and personal growth. Each project represents a unique challenge solved with modern technologies.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects or technologies..."
                className="w-full pl-10 pr-4 h-11 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {(["all", "featured"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 capitalize ${
                    filter === f
                      ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/25"
                      : "bg-muted/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f === "all" ? "All Projects" : "Featured"}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-border/50">
                  <Skeleton className="h-48 w-full rounded-none" />
                  <div className="p-6 space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <div className="flex gap-2 pt-2">
                      <Skeleton className="h-6 w-16 rounded-full" />
                      <Skeleton className="h-6 w-20 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try a different search term or filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="group rounded-2xl overflow-hidden border border-border/50 bg-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:border-[#2563EB]/30"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {project.featured && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F59E0B] text-white text-xs font-bold">
                        <Star className="w-3 h-3 fill-current" /> Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end gap-3 p-4">
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
