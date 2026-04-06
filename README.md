# Indigent Scholars: Scholar-Architect Platform

**Scholar-Architect** is a premium, scholarship-matching and verification platform designed to empower indigent Nigerian students through direct, transparent sponsorship.

## 🌟 Key Features

### 1. High-Fidelity Dashboard Suites
Three distinct, role-based experiences designed with a high-performance, glassmorphic aesthetic:
- **Scholar Dashboard**: Multi-step scholarship application, real-time status tracking, and automated sponsor matchmaking.
- **Sponsor Portal**: Detailed scholarship directory of verified students with academic performance telemetry and funding impact ledgers.
- **Global Command Center (Admin)**: A central node for institutional verification workflows, student document audits, and platform telemetry.

### 2. Trust & Transparency Core
- **Direct Ledger**: Real-time tracking of funding pledges and fulfillment history.
- **Verification Engine**: Admin-led audit logs (`verification_logs`) for every student approval and rejection.
- **Role-Based RBAC**: Secure, middleware-enforced routing to ensure data privacy and organizational silos.

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Vanilla CSS with Tailwind-inspired design tokens
- **Backend/Auth**: Supabase (PostgreSQL, RLS Policies, SSR Auth)
- **UI Components**: Framer Motion for micro-animations, Lucide for iconography, Sonner for notifications.

## 🚀 Deployment on Vercel

1. **Connect GitHub**: Point your Vercel project to this repository.
2. **Environment Variables**: Add your Supabase credentials to the Vercel Project Settings:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase API URL.
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase Anon Key.
3. **Build**: Vercel will automatically detect the Next.js project and deploy.

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

---
> [!NOTE]
> This platform emphasizes **Visual Excellence** and **Radical Transparency**. Ensure Supabase RLS is configured correctly when adding new tables.
