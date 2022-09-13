FROM node:latest

WORKDIR /usr/src/app/festival-planner-angular

COPY package*.json ./

RUN npm install -g @angular/cli@14.2.1 @angular-devkit/build-angular@14.2.1 && npm install

EXPOSE 4200

CMD ng serve --port 4200 --host 0.0.0.0 --poll 1
