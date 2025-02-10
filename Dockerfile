# 1️⃣ Usar la imagen oficial de Node.js
FROM node:18

# 2️⃣ Definir el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3️⃣ Copiar package.json y package-lock.json (si existe)
COPY package*.json ./

# 4️⃣ Instalar las dependencias
RUN npm install

# 5️⃣ Copiar todo el código de la app al contenedor
COPY . .

# 6️⃣ Compilar TypeScript
RUN npm run tsc

# 7️⃣ Exponer el puerto en el que corre tu app
EXPOSE 3000

# 8️⃣ Comando para ejecutar la app en producción
CMD ["sh", "-c", "npm run tsc && node dist/index.js"]



