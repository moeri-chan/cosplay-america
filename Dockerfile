FROM node:7
npm install
gulp build
EXPOSE 8888