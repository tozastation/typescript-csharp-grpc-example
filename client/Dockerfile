FROM  node:10.12.0-slim

WORKDIR /client
COPY ./weather-app .
RUN yarn install
CMD ["yarn", "start"]
EXPOSE 3000