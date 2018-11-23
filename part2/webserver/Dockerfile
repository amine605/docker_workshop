FROM node

LABEL authors="wassim.kallel@hotmail.com, atroudi605@gmail.com"

ENV STAGE Dev

WORKDIR /app

COPY app /app

RUN npm install

EXPOSE 3000

CMD [ "nodejs", "server.js"]
