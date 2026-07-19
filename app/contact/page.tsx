"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { submitContact } from "@/actions/contact";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "shikurebrahim@example.com",
    href: "mailto:shikurebrahim@example.com",
    color: "#2563EB",
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    value: "+251 9XX XXX XXX",
    href: "https://wa.me/2519XXXXXXXX",
    color: "#10B981",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ethiopia, Africa",
    href: "https://maps.google.com/?q=Ethiopia",
    color: "#7C3AED",
  },
  {
    icon: Clock,
    title: "Availability",
    value: "Mon – Sat, 9AM – 7PM EAT",
    href: null,
    color: "#F59E0B",
  },
];

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    startTransition(async () => {
      const result = await submitContact(data);
      if (result.success) {
        toast.success(result.message);
        reset();
      } else {
        toast.error(result.error);
      }
    });
  };

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
            <MessageSquare className="w-3.5 h-3.5" /> Let&apos;s Talk
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Start a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
              Conversation
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss your idea and see how we can build something amazing together.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold mb-2">Get in Touch</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-border/50 bg-card hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${info.color}15` }}
                    >
                      <info.icon className="w-5 h-5" style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                        {info.title}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-[#2563EB] transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 border border-[#2563EB]/20">
                <h3 className="font-bold mb-3">Connect on Social Media</h3>
                <div className="flex gap-3">
                  {[
                    { label: "GitHub", href: "https://github.com/Shikur-Ebrahim" },
                    { label: "LinkedIn", href: "https://linkedin.com" },
                    { label: "Twitter", href: "https://twitter.com" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-sm font-medium bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 hover:bg-[#2563EB] hover:text-white transition-all duration-200"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-3xl border border-border/50 bg-card shadow-xl">
                <h2 className="text-2xl font-extrabold mb-2">Send a Message</h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Fill out the form below and I&apos;ll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        {...register("name")}
                        className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        {...register("email")}
                        className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="+1 234 567 890" {...register("phone")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input id="company" placeholder="Your company name" {...register("company")} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Web development project inquiry"
                      {...register("subject")}
                      className={errors.subject ? "border-red-500 focus-visible:ring-red-500" : ""}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-500">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      rows={6}
                      {...register("message")}
                      className={errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    disabled={isPending}
                    className="w-full gap-2"
                  >
                    {isPending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
