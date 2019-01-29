FROM  node:10.15.0-alpine

WORKDIR /client
COPY ./weather-app .
RUN yarn install
CMD ["yarn", "start"]
EXPOSE 3000