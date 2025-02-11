FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run tsc

EXPOSE 3000

CMD ["sh", "-c", "npm run tsc && node dist/index.js"]



