# Build stage
FROM node:lts-slim AS builder
WORKDIR /app

# Copy workspace configuration
# Copy root package metadata and the frontend package metadata first to use layer caching
COPY package*.json ./
COPY packages/frontend/package*.json ./packages/frontend/
COPY packages/shared/package*.json ./packages/shared/

# Install workspace dependencies (cached unless package metadata changes)
RUN npm ci --include-workspace-root

# Copy package sources after install
COPY packages/shared/ ./packages/shared/
COPY packages/frontend/ ./packages/frontend/

# Build shared package then frontend
RUN npm run build --workspace=packages/shared
RUN npm run build --workspace=packages/frontend

# Production stage - lightweight nginx
FROM nginx:alpine
COPY --from=builder /app/packages/frontend/dist /usr/share/nginx/html
# Copy nginx config from the builder stage so it's present in the build context
COPY --from=builder /app/packages/frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
