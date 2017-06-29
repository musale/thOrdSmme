FROM node:argon
ENV NODE_ENV=docker
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 5000
