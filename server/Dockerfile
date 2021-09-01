FROM    node as build step
RUN     mkdir -p /app/src
COPY    src src
COPY    package.json .
CMD     ["node","api.js:run"]