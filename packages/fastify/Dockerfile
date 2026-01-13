FROM node:22-slim AS builder
WORKDIR /app
COPY package*.json ./
COPY packages/fastify/package.json ./packages/fastify/
RUN npm ci --workspace=fastify
COPY packages/fastify ./packages/fastify/
WORKDIR /app/packages/fastify
RUN npm run build

FROM node:22-slim AS production
WORKDIR /app
COPY --from=builder /app/packages/fastify/package.json ./
COPY --from=builder /app/packages/fastify/dist ./dist
RUN npm install --omit=dev
EXPOSE 3000
CMD ["node", "dist/server.js"]