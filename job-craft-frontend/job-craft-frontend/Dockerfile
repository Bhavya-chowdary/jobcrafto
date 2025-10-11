# ---- Build Stage ----
FROM node:18-alpine AS build

WORKDIR /app

# Copy dependencies first
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# ---- Run Stage ----
FROM nginx:alpine

# Copy build output to Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose frontend port
EXPOSE 3000:80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
