# Learning Docker

The basics with docker to create amazing containers. We can download and install docker [here](https://docker.com)

Running a basic container to test it:

```
docker run ubuntu /bin/echo "Hello Docker!"
```

* The `run` option will init the container;
* The image to use, here is `ubuntu`;
* The command to execute in container;

Docker will download the ubuntu image, create the server and run our `echo` command. It's possible to find more images in [Docker Store](https://store.docker.com/)

## Some quick commands

* **`docker run`** - Create container
* **`docker pull mysql`** - Download image
* **`docker images`** - List images
* **`docker ps`** - List running containers
* **`docker ps -a`** - List all containers


## 1. Running wordpress and mysql with docker

To create the mysql database container, it's possible to use `--name` option to define it as the following

```
docker run --name database -e MYSQL_ROOT_PASSWORD=teste123 -d mysql
```

* Use **`-e`** to set a value to envinroment variable
* **`-d`** to run it in background

And create the wordpress container

```
docker run --name blog --link database:mysql -e WORDPRESS_DB_PASSWORD=teste123 -p 80:80 -d wordpress
```

* The `--link` is to establish a connection with this container.
* `-p` is how it define the ports, the first is from the local machine and the second is from container.
