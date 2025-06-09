# Etapa 1: Compilar la app Angular
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servir la app con NGINX
FROM nginx:alpine
COPY --from=build /app/dist/freeworks-panel /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
