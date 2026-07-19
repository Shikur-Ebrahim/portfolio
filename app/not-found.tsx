import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-[#2563EB]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#7C3AED]/10 blur-3xl" />
      </div>
      <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mb-4">
        404
      </div>
      <h1 className="text-3xl font-extrabold mb-4">Page Not Found</h1>
      <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-500/25"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-xl border-2 border-[#2563EB] text-[#2563EB] font-semibold hover:bg-[#2563EB] hover:text-white transition-all duration-200"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
