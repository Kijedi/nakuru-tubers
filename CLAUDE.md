# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nakuru Tubers is a Next.js 15 website for a Kenyan seed potato company. The site showcases their services, products, and consultation packages for potato farmers.

## Commands

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Production build
- `npm run lint` - Run ESLint
- `npm start` - Start production server

## Architecture

**Framework**: Next.js 15 with App Router, React 19, Tailwind CSS v4

**Directory Structure**:
- `app/` - Next.js App Router pages (uses mixed .js/.jsx/.tsx files)
- `components/ui/` - Reusable UI components (Hero, Navbar, Footer, etc.)
- `components/data/` - Static data files (services.js, products.js, packages.js)
- `components/lib/utils.ts` - Utility functions (cn helper for Tailwind class merging)

**Key Patterns**:
- Path aliases: `@/components/*`, `@/utils/*`, `@/lib/*` (configured in tsconfig.json)
- UI primitives use Radix UI (Dialog, Popover, Slot) with shadcn/ui patterns
- Styling uses `cn()` utility from `components/lib/utils.ts` for class merging
- Animations via Framer Motion and tailwindcss-animate
- Toast notifications via Sonner

**External Services**:
- Appwrite (node-appwrite) for backend services
- Images hosted on Appwrite cloud and DigitalOcean Spaces (configured in next.config.mjs)

**Pages**:
- `/` - Homepage with multiple sections (Hero, About, Traction, Services, etc.)
- `/services/[id]` - Dynamic service detail pages
- `/products`, `/team`, `/contact`, `/market_place` - Static pages
