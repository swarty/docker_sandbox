# how to decreese docker images
P.S: try to search alphine images

# to read service logs: 
docker logs docker_api_db_1(name of your service) ...

# docker images
some dockerfile with seetings that was loaded from hub.docker.com

# how to go into docker container and run some command there:
- docker ps to show list of containers
- take docker container name and run: `docker exec -it {docker-container-name} sh`
- then you can run any shell command, cd/ls ....

# all services inside docker communicate between each other not via localhost!!!
it communicate as example: http://auth:3002/api
- `http://` mandatory part,
- service name `auth`
- port that was given for communacation
- routes that opened for api methods (opened into server reponse files get|post requests)

# show docker images ids
- docker ps -aq
and if we want remove all containers from previous command:
- docker rm $(docker ps -aq)
remove docker image after some solved some command
- docker run --rm [some image name f.e: ubuntu:16.04] echo "hellow world"
then after printing "hellow world" container will be removed

if we want to remove all images (by analogy with containers)
- docker images -q, show all images id
- docker rmi $(docker images -q)