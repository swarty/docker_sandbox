# docker image, loaded from hub.docker.com
FROM node:13.12.0-alpine

# working dirrectory
WORKDIR /usr/src/app/

# copy package-lock.json and package to container app folder
COPY package*.json ./

# then run npm commands in docker shell
RUN npm install

# then copy all files from our folder without node_modules folder (because we will delete it folder)
COPY . .

# upd: migrated two commands below to docker-compose file
# give your container settings to listen some port
# EXPOSE 8080

# command to run dev server
# CMD ["node", "run start"]
