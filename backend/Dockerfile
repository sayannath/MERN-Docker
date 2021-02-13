FROM node:14.15-alpine

WORKDIR /usr/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .
