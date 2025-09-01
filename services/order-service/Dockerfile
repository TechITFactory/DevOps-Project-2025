FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy app source + wait-for-db.sh explicitly
COPY . .
COPY wait-for-db.sh ./wait-for-db.sh

RUN chmod +x ./wait-for-db.sh

CMD ["./wait-for-db.sh", "db", "node", "src/server.js"]
