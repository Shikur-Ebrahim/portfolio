"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Twitter, Mail, ArrowUp, Send } from "lucide-react";
import { subscribeNewsletter } from "@/actions/newsletter";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Pages: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/Shikur-Ebrahim", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:shikur@example.com", label: "Email" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await subscribeNewsletter({ email });
    setLoading(false);
    if (result.success) {
      toast.success(result.message);
      setEmail("");
    } else {
      toast.error(result.error);
    }
  };

  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-sm">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2563EB]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-16 max-w-7xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                Shikur
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Full Stack Web Developer from Ethiopia, building modern, fast, secure & scalable web applications.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-[#2563EB] hover:bg-[#2563EB]/10 transition-all duration-200 hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-foreground">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-[#2563EB] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-foreground">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get updates on my latest projects and articles.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="flex-1 h-10 px-3 text-sm rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
              />
              <Button type="submit" size="icon" disabled={loading} className="h-10 w-10 shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shikur Ebrahim Muhammed. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ in Ethiopia 🇪🇹
          </p>
          <button
            onClick={handleScrollTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-all duration-200 hover:-translate-y-1"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
