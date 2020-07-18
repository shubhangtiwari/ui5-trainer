FROM sapui5:latest

EXPOSE 80
WORKDIR /ui5-trainer
COPY package.json .
COPY app.js .

RUN npm install
CMD node app.js