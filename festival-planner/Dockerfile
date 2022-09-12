FROM node:latest

WORKDIR /usr/src/app/festival-planner

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

EXPOSE 4200

CMD ng serve --port 4200 --host 0.0.0.0 --poll 1
