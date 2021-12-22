FROM node:lts-alpine as build-stage
WORKDIR /app

ARG APIGATEWAY_URL="http://gateway.default.svc.cluster.local:5001/"
ENV ANGULAR_APP_API_GATEWAY ${APIGATEWAY_URL}}
ARG APP_URL="http://localhost:4200"
ENV ANGULAR_APP_URL = ${APP_URL}

COPY package*.json ./
RUN npm install
COPY . /app
RUN npm run build --prod

# production stage
FROM nginx:1.17.1-alpine as production-stage
COPY --from=build-stage /app/dist/FictivusForum /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
