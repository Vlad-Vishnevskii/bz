FROM node:18-alpine
WORKDIR /
COPY package*.json .
COPY yarn*.lock .
RUN yarn install
COPY . .
RUN yarn build