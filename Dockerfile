FROM node:20.10.0

WORKDIR /var/app
ADD . /var/app/

RUN command -v yarn >/dev/null 2>&1 || npm install -g yarn
RUN yarn install

CMD [ "yarn", "start" ]
