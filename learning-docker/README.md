# Learning Docker

The basics with docker to create amazing containers. We can download and install docker [here](https://docker.com)

Running a basic container to test it:

```
docker run ubuntu /bin/echo "Hello Docker!"
```

- The `run` option will init the container;
- The image to use, here is `ubuntu`;
- The command to execute in container;

Docker will download the ubuntu image, create the server and run our `echo` command. It's possible to find more images in [Docker Store](https://store.docker.com/)

## Some quick commands

- **`docker run`** - Create container
- **`docker pull mysql`** - Download image
- **`docker images`** - List images
- **`docker ps`** - List running containers
- **`docker ps -a`** - List all containers
- **`docker rm [id|name]`** - Remove container
- **`docker rm $(docker ps -qa)`** - Remove all containers
- **`docker rmi [id|name]`** - Remove image
- **`docker exec -it blog bash`** - Execute bash interacting with container
- **`docker start [name|id]`** - Start a container
- **`docker stop [name|id]`** - Stop a container
- **`docker kill [name|id]`** - Kill a container
- **`docker inspect [name|id]`** - Get container informations

## 1. Running wordpress and mysql with docker

To create the mysql database container, it's possible to use `--name` option to define it as the following

```
docker run --name database -e MYSQL_ROOT_PASSWORD=teste123 -d mysql
```

> - Use **`-e`** to set a value to envinroment variable
> - **`-d`** to run it in background

And create the wordpress container

```
docker run --name blog --link database:mysql -e WORDPRESS_DB_PASSWORD=teste123 -p 80:80 -d wordpress
```

> - The `--link` is to establish a connection with this container.
> - `-p` is how it define the ports, the first is from the local machine and the second is from container.


## 2. Containers

As the containers are created, it's possible to execute *bash* to interact with them.

```
docker exec -i -t blog bash
```
> - The **`-i`** is to interact with shell
> - The **`-t`** is to simulate the TTY

And another interesting feature, is create some **disposable containers** as the following

```
docker run --rm -it ubuntu bash
```


## 3. Build your own image

It's nice that can be created our own image, a ubuntu with simple Node.js, cab be done as:

Creating a base container
```
docker run -it ubuntu bash
```

Install something in there
```
apt-get update && apt-get install nodejs
```

And create a new image from this container's changes

```
docker commit -m "Installing NodeJS" [container's name|id] [image]/nodejs
```

This way, `ubuntu/nodejs` can be a fork from the ubuntu image.


## 4. Automate the build process with Dockerfile

Automate is aways the best path to follow, and Docker file can help build an image with almost zero effort.

The Dockerfile can be like this

```
FROM ubuntu

RUN apt-get update && apt-get install -y apache2

EXPOSE 80

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
```

> - **`FROM`** is the base image to use
> - **`RUN`** is where we can instal Apache
> - **`EXPOSE`** is the port we want to use
> - **`CMD`** is the command to run Apache


## 5. What more can be done with Dockerfile?

It's possible to add the files to the containter as in this:

```
FROM ubuntu

RUN apt-get update && apt-get install -y apache2

ADD app/ /var/www/html
COPY app/ /var/www/html/app

EXPOSE 80

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
```

> - **`ADD`** and **`COPY`** copy files to containter


## 6. Using docker compose

To control some containers, a docker compose file manifest can handle it and save some effort in doing it by typing an entire code line.

The file `docker-compose.yml` can be like

```
db:
  image: mysql
  environment:
    - MYSQL_ROOT_PASSWORD=teste123

blog:
  image: wordpress
  environment:
    - WORDPRESS_DB_PASSWORD=teste123
  links:
    - db:mysql
  ports:
    - 80:80
```

and run the containers with

```
docker-compose up
```


## 7. Create volume to keep data

Volumes are great way to keep files synced or even persist some database data with the command

```
docker run -it -v $(pwd):/tmp ubuntu bash
```

> - **`-v`** create the volume to container

With **`docker-compose`**, the configuration can be done this way

```
blog:
  image: wordpress
  volumes:
    - ~/blog/:/var/www/html/
...
```
