FROM node:22-alpine
WORKDIR /landing-page

COPY . .

RUN npm i
RUN npm run build