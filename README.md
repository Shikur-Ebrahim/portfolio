# Shikur Ebrahim Muhammed — Portfolio

A premium, production-ready Full Stack Developer portfolio website built with Next.js 15, TypeScript, Tailwind CSS, Supabase, and Prisma.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: Supabase + Prisma ORM
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your Supabase credentials

# Push database schema
npx prisma db push

# Start development server
npm run dev
```

## 🔐 Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
DATABASE_URL=your_database_url
DIRECT_URL=your_direct_url
```

## 📁 Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── actions/          # Server Actions
├── lib/              # Utilities, Prisma, Supabase clients
├── providers/        # React providers
├── prisma/           # Database schema
└── types/            # TypeScript types
```

## 🌐 Live Demo

[https://shikur-portfolio.vercel.app](https://shikur-portfolio.vercel.app)

## 📄 License

MIT © Shikur Ebrahim Muhammed
