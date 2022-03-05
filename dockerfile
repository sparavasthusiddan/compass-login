#Create image based on Node image from dockerhub
FROM node:latest as builder

# #Fixes an issue with Fargate containers needing root certificates installed
# - Alpine - RUN apk upgrade && apk add openssl ca-certificates

RUN apt-get update && apt-get install -y openssl ca-certificates

# Create app directory
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Copy dependencies
COPY package.json /usr/src/app/package.json

# # Copy all the code needed to Run the App
COPY . /usr/src/app

RUN npm install

CMD node /usr/src/app/app.js 

EXPOSE 3001
