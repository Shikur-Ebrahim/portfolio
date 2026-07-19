-- Add new columns to Contact table
ALTER TABLE "Contact" ADD COLUMN IF NOT EXISTS "budget" TEXT;
ALTER TABLE "Contact" ADD COLUMN IF NOT EXISTS "project_type" TEXT;
ALTER TABLE "Contact" ADD COLUMN IF NOT EXISTS "status" TEXT NOT NULL DEFAULT 'pending';
