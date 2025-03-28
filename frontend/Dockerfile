# INSTALL
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install

# COMPILE
COPY ./ ./
RUN npm run build

# RUN
FROM nginx:alpine
COPY --from=build /app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]