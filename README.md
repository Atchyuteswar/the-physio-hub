# 🏥 The Physio Hub

A modern, full-stack web application designed for a premium physiotherapy, rehabilitation, and wellness center. Built with **Next.js (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Prisma ORM**, and **PostgreSQL**.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
- [Available Scripts](#-available-scripts)
- [Admin Management](#-admin-management)
- [SEO & Structured Data](#-seo--structured-data)
- [License](#-license)

---

## ✨ Features

### 🌐 Public Patient Portal
- **Service Hub Pages**: Custom dedicated pages for Physiotherapy, Nutrition Services, Strength & Conditioning, and Yoga & Pilates.
- **Appointment Booking System**: Interactive, user-friendly appointment booking form with instant validation.
- **Lead Generation**: Contact form for general inquiries, service consultations, and patient support.
- **Media & Content Galleries**:
  - **Video Library**: Video tutorials, exercise routines, and wellness guides.
  - **Gallery**: Facility photos, treatment sessions, and equipment showcases.
  - **Patient Testimonials**: Reviews and ratings from real patients.
- **Responsive & Interactive Design**: Smooth animations powered by Framer Motion and styled with Tailwind CSS v4.

### 🛡️ Admin Dashboard & CMS
- **Secure Authentication**: JWT-based admin login with encrypted passwords (`bcryptjs`).
- **Appointments Management**: View, filter, and update appointment statuses (*PENDING*, *CONTACTED*, *COMPLETED*, *CANCELLED*).
- **Leads Tracker**: Manage inbound contact inquiries (*NEW*, *REPLIED*, *ARCHIVED*).
- **CMS Controls**: CRUD operations for managing Videos, Gallery images, Testimonials, and Site Contact Information.

### 🔍 Comprehensive SEO Setup
- Dynamic `sitemap.ts` and `robots.ts` generation.
- Full **JSON-LD Schema Markup** support:
  - `LocalBusinessSchema` (MedicalClinic / PhysicalTherapy)
  - `BreadcrumbJsonLd`
  - `PhysioServiceSchema` & `FAQSchema`
- Optimized metadata, Open Graph cards, and canonical URL structure across all routes.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **UI & Styling** | [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Framer Motion](https://framer.com/motion) |
| **Icons & UI Extras** | [Lucide React](https://lucide.dev/), [Sonner](https://sonner.emilkowal.ski/) (Toast notifications) |
| **Database & ORM** | [PostgreSQL](https://www.postgresql.org/), [Prisma ORM v6](https://www.prisma.io/) |
| **Form & Validation** | [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/) |
| **Authentication** | [JSON Web Tokens (JWT)](https://jwt.io/), [bcryptjs](https://github.com/dcodeIO/bcrypt.js) |
| **Media Uploads** | [Uploadthing](https://uploadthing.com/) |

---

## 📂 Project Structure

```bash
the-physio-hub/
├── prisma/
│   ├── schema.prisma      # Prisma database schema definition
│   └── migrations/        # Database migration history
├── public/                # Static assets (images, icons, favicons)
├── src/
│   ├── app/               # Next.js App Router pages & API routes
│   │   ├── (public)/      # Main public routes (about, services, contact, etc.)
│   │   ├── admin/         # Admin dashboard pages
│   │   ├── api/           # Next.js API route handlers (appointments, admin, contact, etc.)
│   │   ├── layout.tsx     # Root layout with providers & fonts
│   │   ├── page.tsx       # Homepage
│   │   ├── robots.ts      # Dynamic robots.txt handler
│   │   └── sitemap.ts     # Dynamic XML sitemap generator
│   ├── components/        # Reusable React components
│   │   ├── admin/         # Admin management UI components
│   │   ├── home/          # Homepage section components
│   │   ├── landing/       # Landing page blocks & footers
│   │   └── seo/           # JSON-LD & SEO schema components
│   ├── data/              # Static content & configuration data
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities (Prisma client instance, JWT helpers, formatting)
│   ├── scripts/           # Administrative utilities (e.g. create-admin script)
│   └── types/             # TypeScript type definitions
├── .env                   # Environment variables config
├── next.config.ts         # Next.js framework configuration
├── package.json           # Node.js dependencies & scripts
└── tsconfig.json          # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18.x or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)
- A running [PostgreSQL](https://www.postgresql.org/) database instance (or a managed provider like Supabase, Neon, or Prisma Postgres)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/the-physio-hub.git
   cd the-physio-hub
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and configure the following required environment variables:

```env
# PostgreSQL connection string
DATABASE_URL="postgres://user:password@localhost:5432/physiohub?sslmode=require"

# Secret key used for signing JWT authentication tokens
JWT_SECRET="your-super-secret-jwt-key"
```

### Database Setup

1. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

2. **Push Schema to Database** (or run migrations):
   ```bash
   npx prisma db push
   ```

3. **Seed Initial Admin User**:
   ```bash
   npx tsx src/scripts/create-admin.ts
   ```

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the development server at `http://localhost:3000` |
| `npm run build` | Builds the application for production optimization |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check for code style & linting errors |
| `npx tsx src/scripts/create-admin.ts` | Creates default admin credentials (`admin@physiohub.com`) |

---

## 🔑 Admin Management

To access the admin dashboard:

1. Start the development server (`npm run dev`).
2. Run `npx tsx src/scripts/create-admin.ts` to ensure the default admin account exists.
3. Navigate to `http://localhost:3000/admin`.
4. Log in using the admin email and password configured in the script.

---

## 📄 License

This project is proprietary and built for **The Physio Hub**. All rights reserved.
