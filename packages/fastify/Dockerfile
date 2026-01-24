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
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD node -e "require('http').get('http://127.0.0.1:3000/health', res => { process.exit(res.statusCode===200?0:1) }).on('error', () => process.exit(1))"
CMD ["node", "dist/server.js"]