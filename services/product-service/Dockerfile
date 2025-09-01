FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x /app/wait-for-it.sh

EXPOSE 4001

CMD ["/app/wait-for-it.sh", "db", "npm", "start"]
