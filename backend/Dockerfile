# INSTALL
FROM node:18 AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

# COMPILE
COPY src ./src
COPY tsconfig.json ./
RUN npm run build
COPY dist ./dist

# RUN
FROM node:18
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
EXPOSE 5000
CMD ["node", "dist/server.js"]