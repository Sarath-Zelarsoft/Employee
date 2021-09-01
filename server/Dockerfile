FROM    node:12-alpine as build step
RUN     apk add --no-cache nodejs npm
RUN     mkdir /data
COPY    package.json /data
COPY    . /data
RUN     npm install pg
CMD     ["node","api.js:run"]