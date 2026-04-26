ARG NODE_VERSION=24.14.0-alpine

FROM node:${NODE_VERSION} AS builder 

ARG VITE_BASE_API_CAR_URL
ARG VITE_BASE_API_MANUFACTURE_URL

WORKDIR /app
COPY package.json package-lock.json ./


ENV VITE_BASE_API_CAR_URL=$VITE_BASE_API_CAR_URL
ENV VITE_BASE_API_MANUFACTURE_URL=$VITE_BASE_API_MANUFACTURE_URL


RUN --mount=type=cache,target=/root/.npm npm ci
COPY . .
RUN npm run build
FROM node:${NODE_VERSION} AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --link --from=builder /app/dist ./dist
RUN --mount=type=cache,target=/root/.npm npm install serve@^14.2.6 --omit=dev
USER node
EXPOSE 3000
 
CMD ["npx", "serve", "-s", "dist", "-l", "3000"]