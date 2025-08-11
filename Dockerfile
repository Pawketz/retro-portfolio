# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=22.17.1
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base AS build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Copy package files for dependency installation
COPY package-lock.json package.json ./
COPY frontend/package.json frontend/package-lock.json ./frontend/
COPY backend/package.json backend/package-lock.json ./backend/

# Install root dependencies
RUN npm ci --include=dev

# Install frontend dependencies
WORKDIR /app/frontend
RUN npm ci --include=dev

# Install backend dependencies
WORKDIR /app/backend
RUN npm ci --include=dev

# Copy application code
WORKDIR /app
COPY . .

# Build application (this will now work because frontend has its dependencies)
RUN npm run build

# Remove development dependencies
RUN npm prune --omit=dev
WORKDIR /app/frontend
RUN npm prune --omit=dev
WORKDIR /app/backend
RUN npm prune --omit=dev

# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default
WORKDIR /app
EXPOSE 3000
CMD [ "npm", "run", "start" ]