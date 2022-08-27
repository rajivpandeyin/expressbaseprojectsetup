FROM node:10-alpine

WORKDIR /usr/src

# Bundle app source
COPY . .

RUN npm install

EXPOSE 3200

CMD [ "npm", "run", "start" ]