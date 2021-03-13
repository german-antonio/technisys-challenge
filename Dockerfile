FROM node:10

# Create app directory
WORKDIR /usr/src/technisys-challenge

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle app src
COPY . .

CMD [ "node", "index.js" ]