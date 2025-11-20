# Build stage
FROM node:lts-slim AS builder
WORKDIR /app

ARG APP_NAME="app"
ENV VITE_APP_NAME=${APP_NAME}

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
ARG APP_NAME="app"
ENV APP_NAME=${APP_NAME}

# Install envsubst (gettext) so we can render the nginx template at build time
RUN apk add --no-cache gettext

# Copy built static assets
COPY --from=builder /app/packages/frontend/dist /usr/share/nginx/html/${APP_NAME}/

# Copy the nginx template from the builder stage and render it at image build time
COPY --from=builder /app/packages/frontend/nginx.conf /etc/nginx/conf.d/default.conf.template
RUN envsubst '${APP_NAME}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
