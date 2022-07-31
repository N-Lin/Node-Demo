FROM node:18-alpine3.15
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . .
RUN npm install

EXPOSE 3050
CMD [ "npm", "start"]