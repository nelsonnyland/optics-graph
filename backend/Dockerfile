# INSTALL
FROM node:18 AS dependencies
WORKDIR /app
COPY backend/package*.json ./
RUN npm install

# COMPILE
COPY backend/src ./src
RUN npm run build

# RUN
FROM node:18
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY backend/dist ./dist
EXPOSE 5000
CMD ["node", "dist/server.js"]