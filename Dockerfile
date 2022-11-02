FROM node:16.13.0-alpine3.12

ENV NODE_VERSION 18.12.0 
WORKDIR /app
COPY ./app /app
EXPOSE 3000
ENV CI=true

RUN npm install -g create-react-app
RUN npm install --save react-router-dom
RUN npm install --save prop-types
RUN npm install -g firebase
RUN npm install -g firebase-tools