# Build stage
FROM node:lts-slim AS builder
WORKDIR /app

# Copy workspace configuration
COPY package*.json ./
COPY packages/frontend/package*.json ./packages/frontend/

# Copy shared package
COPY packages/shared/package*.json ./packages/shared/
COPY packages/shared/ ./packages/shared/

# Install dependencies (includes workspace dependencies)
RUN npm ci --include-workspace-root

# Copy frontend source code
COPY packages/frontend/ ./packages/frontend/

# Build shared package first
RUN npm run build --workspace=packages/shared

# Build frontend
RUN npm run build --workspace=packages/frontend

# Production stage - lightweight nginx
FROM nginx:alpine
COPY --from=builder /app/packages/frontend/dist /usr/share/nginx/html
COPY packages/frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
