---
trigger: always_on
---

# WedManager - Project Rules & Guidelines

## 1. Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Forms & Validation:** React Hook Form + Zod
- **State Management:** Zustand
- **Database:** PostgreSQL (Local)
- **ORM:** Prisma
- **Backend Logic:** Next.js Server Actions & API Routes

## 2. Project Architecture & Patterns

### 2.1 Next.js App Router
- Use the `/app` directory for all routing.
- Default to **Server Components** for better performance and SEO.
- Add `"use client"` directive **only** at the top of files that require client-side interactivity (e.g., event listeners `onClick`, hooks like `useState`, `useEffects`, `useForm`).
- Keep Client Components as lean as possible. Move data fetching and heavy logic to Server Components, passing data down as props.

### 2.2 Directory Structure (Proposed)
```text
/
├── app/                  # Next.js App Router
│   ├── (auth)/           # Authentication routes (/login, /signup)
│   ├── (marketing)/      # Public marketing pages (/ -> layout with header/footer)
│   ├── app/              # Tenant Workspace routes (/app/[tenant_slug]/*)
│   ├── superadmin/       # Superadmin routes (/superadmin/*)
│   ├── api/              # API Routes (if needed for webhooks/external)
│   └── globals.css       # Global styles & Tailwind directives
├── components/           # Reusable UI Components
│   ├── ui/               # shadcn/ui components (auto-generated)
│   ├── forms/            # Shared form components 
│   ├── layouts/          # Layout components (Sidebars, Topbars)
│   └── marketing/        # Landing page specific components
├── lib/                  # Utility functions
│   ├── prisma.ts         # Prisma client instantiation
│   └── utils.ts          # Tailwind merge util (cn)
├── actions/              # Next.js Server Actions (Mutations & Data Fetching)
├── config/               # Constants, Enums, Feature Flags
├── hooks/                # Custom React Hooks
└── store/                # Zustand stores
```

### 2.3 File Naming Conventions
- React Components & Pages: **PascalCase** (e.g., `TenantSidebar.tsx`, `Page.tsx`)
- Server Actions, Utils, Hooks: **camelCase** (e.g., `createTenant.ts`, `useAuth.ts`)
- Component Files: `[ComponentName].tsx`
- Types/Interfaces: `[entity].types.ts` or keep them close to where they are used.

## 3. Multi-Tenancy & Data Isolation

### 3.1 Tenant ID Constraint
- **CRITICAL:** Almost all database operations (except superadmin global views) must include `tenant_id` in their `where` clause to prevent data leakage between Wedding Organizers.
```typescript
// Good: Scoped to tenant
const leads = await prisma.lead.findMany({
  where: { tenant_id: currentTenantId }
});

// Bad: Cross-tenant data leak
const leads = await prisma.lead.findMany(); 
```

### 3.2 Role-Based Access Control (RBAC)
- **Superadmin:** Has global access. Routed to `/superadmin`.
- **Tenant Admin:** Has full access within their `tenant_id`. Routed to `/app/[tenant_slug]`.
- **Staff:** Has restricted access within their `tenant_id`. Routed to `/app/[tenant_slug]`.
- Enforce RBAC in Next.js Middleware (`middleware.ts`).

## 4. UI & Styling

### 4.1 Tailwind CSS & shadcn/ui
- Use standard utility classes from Tailwind. Do not use random inline styles.
- Use `cn()` utility (clsx + tailwind-merge) for conditional class names.
- All core UI elements (Buttons, Inputs, Dialogs) must be built using `shadcn/ui`. Provide beautiful and premium designs without using purely default styles where not appropriate.

### 4.2 Forms & Validation
- **Always** use `zod` schemas for validation. Define schemas close to the forms or in a central schema config.
- Use `react-hook-form` connected with the `@hookform/resolvers/zod` plugin.
- Validate inputs both on the client (React Hook Form) and on the server (Server Actions parsed with Zod).

## 5. Development Workflow (Phase 1 Constraints)
- **Scope Limit:** Phase 1 focuses ONLY on foundational scaffolding, schemas, auth, and layout shells. No operational features (funnels, builder, etc.) are to be built yet.
- **Stub Pages:** For pages outside Phase 1 scope (like `/app/[tenant_slug]/calendar`), return simple placeholder minimal UIs.

## 6. Terminal Environments (PowerShell)
- **CRITICAL:** Use PowerShell syntax for all terminal commands.
- Do **NOT** use `&&`. Use `;` or `if ($?) { ... }` for chaining commands.
- Do **NOT** use `\` for line breaks in commands (use <code>`</code> backtick in PowerShell if needed, but preferably single-line commands).
- Avoid bash-specific commands like `export VAR=val`, `cp`, `rm`, `ls` unless equivalent aliases exist in the user's PowerShell environment, or simply use node scripts/cross-env where possible.
- Environment variables should be set using `$env:VAR="value"` before running local scripts.
