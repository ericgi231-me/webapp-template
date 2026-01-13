# AI Context - Webapp Template

## Project Overview
This is a minimal monorepo template for React + Fastify applications with Docker containerization. The goal is to keep everything simple, understandable, and production-ready without unnecessary complexity.

## Architecture Decisions

### Package Management
- **npm workspaces** (not pnpm, yarn, or Turbo)
- Single root `package-lock.json` for workspace consistency
- `npm-run-all` for task orchestration (run-p for parallel, run-s for sequential)
- Each package is self-contained with its own config files
- **No logic or configs in root** - everything specific to packages

### Frontend Stack
- **React 19** with TypeScript
- **Vite 7** with SWC compiler
- **ES modules** throughout
- React Router for client-side routing
- Development on port 5173, production on port 80 (nginx)

### Backend Stack
- **Fastify 5** with TypeScript
- **ES modules** (type: "module", module: NodeNext)
- **tsx** for development (removed fastify-cli - 92 deps → 8x faster reload)
- Direct server entry point (src/server.ts)
- Development on port 3000

### Containerization
- Docker multi-stage builds (builder + production)
- Docker context is **root directory** (uses workspace lock file)
- `npm ci --workspace=PACKAGE_NAME` in Dockerfiles
- Backend: Node 22-slim for both stages
- Frontend: Node 22-slim (build) → nginx:alpine (production, ~30MB)
- Only frontend port exposed (80), backend internal only

### Networking & Routing
- **nginx reverse proxy** strips path prefixes
- Frontend → `/api/users` → Backend → `/users` (prefix removed)
- Apps use **clean root paths** (deployment-agnostic)
- No CORS needed (nginx proxies, same-origin)
- Docker network: webapp-network (bridge)

## Coding Standards

### TypeScript
- Strict mode enabled
- ES2022 target
- NodeNext module resolution (enables top-level await)
- Explicit type annotations for Fastify plugins (FastifyInstance)

### Module System
- ES modules only (no CommonJS)
- `.js` extensions required in imports (ES module spec)
- `import.meta.url` for __dirname equivalent

### Dependencies
- Minimal approach - avoid bloat
- Remove unnecessary dependencies
- Prefer built-in solutions over libraries

## Development Workflow

### Local Development
- `npm run dev` - Primary development (hot reload for both services)
- Frontend Vite dev server proxies `/api` to `http://localhost:3000`
- Backend uses `tsx watch` with `--env-file=.env`

### Docker Testing
- `npm run docker:build` - Build images
- `npm run docker:up` - Start containers (-d for detached)
- `npm run docker:down` - Stop and remove containers
- Docker is for **production testing only**, not daily development
- Use `docker-compose up --build --force-recreate` to rebuild and restart

### Scripts Pattern
- Use npm-run-all for orchestration
- `run-p` for parallel execution (dev servers)
- `run-s` for sequential (clean → build → deploy)

## Deployment Rules

### Path Handling
- Apps MUST NOT know their deployment path
- nginx handles all path rewriting with trailing slash trick
- Apps are portable and can be accessed directly via ports

### Environment Variables
- Backend: `--env-file=.env` flag or docker-compose environment section
- Frontend: Vite `VITE_` prefix for client-side vars
- Never bake env vars into Dockerfiles

### Port Management
- Frontend: 8080 (docker-compose) maps to 80 (nginx)
- Backend: 3000 internal only (not exposed externally)
- Apps accessed via nginx proxy, not direct port access in production

## What NOT to Do

### Rejected Approaches
- ❌ Turbo - too heavy for minimal template
- ❌ fastify-cli - 92 dependencies, slow reload
- ❌ Individual package lock files - goes against workspace philosophy
- ❌ npm install without lock file - use npm ci in Docker for reproducibility
- ❌ Apps knowing their deployment path (e.g., /api prefix in backend routes)
- ❌ CORS configuration - not needed with nginx proxy
- ❌ Exposing backend port in docker-compose

### Common Pitfalls
- Don't use `npm ci` in package directories (workspace prevents individual lock files)
- Don't forget explicit types for Fastify plugin parameters (strict mode)
- Don't use `__dirname` in ES modules (use `fileURLToPath(import.meta.url)`)
- Don't preserve nginx proxy prefixes (strip with trailing slash in proxy_pass)

## File Structure Principles
- Monorepo: packages/fastify, packages/react, (future: packages/shared)
- Each package has its own tsconfig.json, package.json, Dockerfile
- Root only for workspace coordination, scripts, and docker-compose
- Shared types/utilities in packages/shared (not yet implemented)

## Questions to Ask Before Changes
1. Does this add unnecessary complexity?
2. Can the package stand alone without the monorepo?
3. Are we maintaining clean separation of concerns?
4. Is the Docker context handling workspaces correctly?
5. Does this keep apps deployment-agnostic?
