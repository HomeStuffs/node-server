FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY server/package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY server /usr/src/app

CMD [ "npm", "start" ]
