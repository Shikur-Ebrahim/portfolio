import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryProvider } from "@/providers/QueryProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Shikur Ebrahim Muhammed | Full Stack Web Developer",
    template: "%s | Shikur Ebrahim Muhammed",
  },
  description:
    "Full Stack Web Developer from Ethiopia, specializing in React, Next.js, Node.js, PostgreSQL, Supabase, and Prisma. Building modern, fast, secure & scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Ethiopia",
    "Freelancer",
    "Portfolio",
    "Node.js",
    "TypeScript",
  ],
  authors: [{ name: "Shikur Ebrahim Muhammed" }],
  creator: "Shikur Ebrahim Muhammed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shikur-portfolio.vercel.app",
    title: "Shikur Ebrahim Muhammed | Full Stack Web Developer",
    description:
      "Full Stack Web Developer from Ethiopia, specializing in building modern web applications.",
    siteName: "Shikur Ebrahim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shikur Ebrahim Muhammed | Full Stack Web Developer",
    description:
      "Full Stack Web Developer from Ethiopia, specializing in building modern web applications.",
    creator: "@shikurebrahim",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster position="bottom-right" richColors />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
