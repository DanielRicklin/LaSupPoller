FROM node

ENV MONGO_DB_USERNAME=root \
    MONGO_DB_PWD=example

RUN mkdir -p /home/LaSupPoller

COPY ./app /home/LaSupPoller

# RUN npm install

CMD ["node", "/home/LaSupPoller/index.js"]