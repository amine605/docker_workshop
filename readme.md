# Docker Workshop

Usefull links
  ##### docker documentation : <https://docs.docker.com/>
  ##### docker hub: <https://hub.docker.com/>
  
# Installation: 
### ubuntu

```sh
	 sudo apt update
	 sudo apt install apt-transport-https ca-certificates curl software-properties-common
	 curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
	 sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
	 sudo apt update
	 apt-cache policy docker-ce
	 sudo apt install docker-ce
	 sudo systemctl status docker
	 sudo usermod -aG docker ${USER}	
	 sudo su - ${USER}
	 docker
	 docker run hello-world
```
For this workshop we will be using 
    - EC2 
    - Ubuntu 18.14
# Part 0 :

```sh
$ docker container ls -a 
$ docker container ls 
$ docker image ls 
$ docker pull image-name
$ docker run imageName
$ docker container stop ID
$ docker inspect imageName
$ docker inspect containerID
```
docker run options : 
 `Docker run  [-v volume] [-d detatch] [-P expose ports ] [-p expose ports manually] `

Access the container 
```sh
	docker exec -it containerID /bin/bash
```

# PART 1 :

```Dockerfile
		 FROM  node
		 LABEL Maintainer="Docker workshop"
		 WORKDIR /app
		 COPY ./app/* ./
		 RUN npm install
		 ENV STAGE  dev		 
		 EXPOSE 3000
		 CMD ["node","server.js"]
```
# Part 2 : 
```sh
 $ docker swarm init
```
```sh
 $ docker stack deploy --compose-file=docker-compose.yml webStack
```
```sh
 $ docker service ls
```
```sh
 $ docker stack rm webstack
```

# part 3 - ECS Service:

`You have to execute the commands provided from AWS after creating the repository when working with ECS`

```sh
docker push repositoryURI
```

