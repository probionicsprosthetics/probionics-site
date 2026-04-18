# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### landing-page (`artifacts/landing-page/`)
- **Preview path**: `/` (served at root)
- **Type**: React + Vite, single-page landing page
- **Purpose**: Prosthetics company landing page with hero, problem statement, 3D-printed socket solution, news/updates, contact form
- **Photos**: Uses `attached_assets/image_1776533419876.png` and `attached_assets/image_1776533493544.png` via `@assets` alias
- **Company name placeholder**: "AXIS" — update to real brand name when available
- **No backend**: Form submissions stay in local React state

### api-server (`artifacts/api-server/`)
- Express 5 backend serving at `/api`
- Currently minimal (just health check at `/api/healthz`)
