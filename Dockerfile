FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000 

CMD ["npm","start"]