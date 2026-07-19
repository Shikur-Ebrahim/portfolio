-- Create contacts table
CREATE TABLE IF NOT EXISTS "Contact" (
  "id" TEXT NOT NULL DEFAULT gen_random_uuid()::TEXT,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT,
  "company" TEXT,
  "subject" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- Create newsletter table
CREATE TABLE IF NOT EXISTS "Newsletter" (
  "id" TEXT NOT NULL DEFAULT gen_random_uuid()::TEXT,
  "email" TEXT NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Newsletter_email_key" UNIQUE ("email")
);

-- Create projects table
CREATE TABLE IF NOT EXISTS "Project" (
  "id" TEXT NOT NULL DEFAULT gen_random_uuid()::TEXT,
  "title" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "image" TEXT NOT NULL,
  "technologies" TEXT[],
  "live_url" TEXT,
  "github_url" TEXT,
  "featured" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Project_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Project_slug_key" UNIQUE ("slug")
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS "Testimonial" (
  "id" TEXT NOT NULL DEFAULT gen_random_uuid()::TEXT,
  "client_name" TEXT NOT NULL,
  "company" TEXT,
  "position" TEXT,
  "message" TEXT NOT NULL,
  "rating" INTEGER NOT NULL DEFAULT 5,
  "image" TEXT,
  "approved" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- Enable Row Level Security
ALTER TABLE "Contact" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Newsletter" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Project" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Testimonial" ENABLE ROW LEVEL SECURITY;

-- Allow insert from anon for contact form
CREATE POLICY "Allow anon insert on Contact" ON "Contact"
  FOR INSERT TO anon WITH CHECK (true);

-- Allow insert from anon for newsletter
CREATE POLICY "Allow anon insert on Newsletter" ON "Newsletter"
  FOR INSERT TO anon WITH CHECK (true);

-- Allow read of approved testimonials for anon
CREATE POLICY "Allow anon read approved Testimonials" ON "Testimonial"
  FOR SELECT TO anon USING (approved = true);

-- Allow read of projects for anon
CREATE POLICY "Allow anon read Projects" ON "Project"
  FOR SELECT TO anon USING (true);

-- Allow service_role full access
CREATE POLICY "Allow service_role full access on Contact" ON "Contact"
  FOR ALL TO service_role USING (true);
CREATE POLICY "Allow service_role full access on Newsletter" ON "Newsletter"
  FOR ALL TO service_role USING (true);
CREATE POLICY "Allow service_role full access on Project" ON "Project"
  FOR ALL TO service_role USING (true);
CREATE POLICY "Allow service_role full access on Testimonial" ON "Testimonial"
  FOR ALL TO service_role USING (true);

-- Insert some demo projects
INSERT INTO "Project" ("id", "title", "slug", "description", "image", "technologies", "live_url", "github_url", "featured")
VALUES
(
  gen_random_uuid()::TEXT,
  'School Management System',
  'school-management-system',
  'A complete school management system with student enrollment, attendance, grades, teacher portal, and parent dashboard built with Next.js and PostgreSQL.',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=60',
  ARRAY['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
  'https://example.com',
  'https://github.com/Shikur-Ebrahim',
  true
),
(
  gen_random_uuid()::TEXT,
  'E-commerce Platform',
  'ecommerce-platform',
  'A fully featured e-commerce store with product catalog, cart, Stripe payments, order management, and admin dashboard.',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60',
  ARRAY['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
  'https://example.com',
  'https://github.com/Shikur-Ebrahim',
  true
),
(
  gen_random_uuid()::TEXT,
  'Hotel Booking System',
  'hotel-booking-system',
  'Modern hotel booking platform with room management, real-time availability, online reservations, and payment integration.',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60',
  ARRAY['Next.js', 'Supabase', 'Prisma', 'TypeScript', 'Tailwind CSS'],
  'https://example.com',
  'https://github.com/Shikur-Ebrahim',
  true
);

-- Insert demo testimonial
INSERT INTO "Testimonial" ("id", "client_name", "company", "position", "message", "rating", "approved")
VALUES (
  gen_random_uuid()::TEXT,
  'Abebe Girma',
  'Addis Tech Solutions',
  'CEO',
  'Shikur built our company website and internal management system. The quality was exceptional and delivery was on time. Highly recommended!',
  5,
  true
);
