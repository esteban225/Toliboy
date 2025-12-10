# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Stage 2: Runtime
FROM node:18-alpine

WORKDIR /app

# Instalar serve para servir la aplicación
RUN npm install -g serve

# Copiar los archivos compilados del stage anterior
COPY --from=builder /app/dist ./dist

# Copiar package.json para las dependencias runtime
COPY package*.json ./

# Instalar solo dependencias de producción
RUN npm ci --only=production

# Exponer el puerto
EXPOSE 5173

# Comando para iniciar la aplicación
CMD ["serve", "-s", "dist", "-l", "5173"]
