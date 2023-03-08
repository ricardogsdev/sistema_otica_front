#docker run --name nodetemp --mount type=bind,source="$(pwd)"/front/app,target=/usr/src/app -it -p 3000:3000 node bash
# Dockerfile

# Use node alpine as it's a small node image
FROM node

# Create the directory on the node image 
# where our Next.js app will live
FROM node

WORKDIR /app

COPY package.json .

RUN npm i -g vite
RUN npm i --force

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 3000

CMD ["npm", "run", "dev"]