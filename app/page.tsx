"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Star,
  Zap,
  Shield,
  Globe,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TYPING_WORDS = [
  "Modern Web Applications",
  "React & Next.js Apps",
  "Full Stack Solutions",
  "Scalable Backends",
  "Beautiful UI Designs",
];

const STATS = [
  { label: "Years of Learning", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies", value: "25+" },
  { label: "Happy Clients", value: "10+" },
];

const TECH_BADGES = [
  "React", "Next.js", "TypeScript", "Node.js",
  "PostgreSQL", "Supabase", "Prisma", "Tailwind CSS",
];

const FEATURES = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Optimized for performance with cutting-edge technologies.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices and robust architectures.",
  },
  {
    icon: Globe,
    title: "Globally Scalable",
    description: "Deployments designed to scale to millions of users.",
  },
];

function TypingAnimation() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
          );
        },
        isDeleting ? 60 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4]">
      {text}
      <span className="animate-pulse text-[#2563EB]">|</span>
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#2563EB]/20 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#7C3AED]/20 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, 20, 0], y: [0, 40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-[#06B6D4]/15 blur-3xl"
          />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              Available for hire • Ethiopia 🇪🇹
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
            >
              Shikur Ebrahim
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
                Muhammed
              </span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 h-10"
            >
              Building <TypingAnimation />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              I help businesses, startups, schools, hotels, hospitals, restaurants, NGOs, and organizations
              transform their ideas into beautiful, responsive, and scalable web applications.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8"
            >
              <MapPin className="w-4 h-4 text-[#2563EB]" />
              Ethiopia, Africa
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link href="/projects">
                <Button size="lg" variant="gradient" className="gap-2">
                  View Projects <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Hire Me <Mail className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center gap-4 mb-16"
            >
              <a
                href="https://github.com/Shikur-Ebrahim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <span className="w-1 h-1 rounded-full bg-border" />
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <span className="w-1 h-1 rounded-full bg-border" />
              <a
                href="mailto:shikur@example.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </motion.div>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {TECH_BADGES.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full border border-border/70 bg-muted/50 text-muted-foreground hover:border-[#2563EB]/50 hover:text-[#2563EB] transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className="text-xs">Scroll Down</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border/50 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
                Me?
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I don&apos;t just write code — I build digital products that deliver real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-8 rounded-2xl border border-border/50 bg-card hover:border-[#2563EB]/30 hover:shadow-2xl hover:shadow-[#2563EB]/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 flex items-center justify-center mb-6 group-hover:from-[#2563EB]/20 group-hover:to-[#7C3AED]/20 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] p-12 text-center text-white"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            />
            <Star className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto relative">
              Let&apos;s turn your ideas into a powerful web application. I&apos;m available for freelance projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <Link href="/contact">
                <Button size="lg" variant="glass" className="gap-2">
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" className="bg-white text-[#2563EB] hover:bg-white/90 gap-2">
                  View My Work <Globe className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
