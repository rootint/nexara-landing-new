FROM node:22 AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD node build

# FROM nginx:1.19-alpine
# COPY --from=build /app/public /usr/share/nginx/html