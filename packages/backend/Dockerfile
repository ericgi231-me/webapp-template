# Multi-stage build for Fastify backend

# Build stage
FROM node:lts-slim AS builder

WORKDIR /app

# Copy workspace configuration
COPY package*.json ./
COPY packages/backend/package*.json ./packages/backend/

# Copy shared package
COPY packages/shared/package*.json ./packages/shared/
COPY packages/shared/ ./packages/shared/

# Install dependencies
RUN npm ci --include-workspace-root

# Copy backend source code
COPY packages/backend/ ./packages/backend/

# Build shared package first
RUN npm run build --workspace=packages/shared

# Build backend
RUN npm run build --workspace=packages/backend

# Remove devDependencies now that the build is complete so we can copy only
# production deps into the runtime image (keeps final image smaller).
RUN npm prune --production

# Production stage
FROM node:lts-slim AS production

WORKDIR /app

# Use the official 'node' non-root user provided by the base image. This avoids
# manually creating users and keeps the image simpler.

# Copy production dependencies and built application from the builder stage
# We copy node_modules (production-only, after prune) so the runtime has all
# required packages (fastify, etc.) without re-running npm in the runtime image.
COPY --from=builder /app/node_modules ./node_modules/
COPY --from=builder /app/packages/backend/dist ./dist/
# Also copy the built shared package into node_modules/shared so imports like
# `import { ... } from 'shared'` resolve even if the installer created symlinks
# during the build stage.
COPY --from=builder /app/packages/shared/package.json ./node_modules/shared/package.json
COPY --from=builder /app/packages/shared/dist ./node_modules/shared/dist/

# Run as the 'node' user (non-root) for better security
USER node

# Expose port (internal container port)
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start application directly
CMD ["node", "dist/server.js"]