FROM node:alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --only=production && npm cache clean --force
COPY . .
VOLUME /app/uploads

# RUN npm run test
CMD ["node", "./bin/www"]

