FROM node:12.14.1

# Create app directory
WORKDIR /home/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /home/app/

RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . /home/app/

RUN npm run migrate
RUN npm run start

EXPOSE 3080 9229
