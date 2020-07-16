FROM node:12-alpine3.12

COPY ./package.json /app/package.json

WORKDIR /app

RUN npm install

COPY . /app

EXPOSE 5555

CMD ["npm", "run", "start"]


