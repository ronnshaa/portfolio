# ViewPoints

ViewPoints is a Next.js (App Router) app for browsing, adding, and rating viewpoints on an interactive map backed by Supabase.

## Milestone M1: project setup

- Next.js 14 with TypeScript and Tailwind CSS
- Initial routes scaffolded:
  - `/` (map landing)
  - `/viewpoint/[id]`
  - `/add`
  - `/login`
  - `/profile`
- Placeholder components for navigation, cards, forms, map picker, photo uploads, and Supabase helpers.

### Environment variables

Copy `.env.example` to `.env.local` and fill in your keys:

```
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="service-role-key"
MAPBOX_TOKEN="your-mapbox-token"
```

### Commands

```
npm install
npm run dev
```

If your network requires a proxy or custom registry, configure `npm_config_registry`, `http_proxy`, or `https_proxy` before installing packages.

### Development notes

- The current UI shows placeholders for map, auth, rating, reporting, and photo upload flows. Functionality will be added in later milestones.
- All code uses the `@/*` import alias and lives in the `app`, `components`, and `lib` folders.
