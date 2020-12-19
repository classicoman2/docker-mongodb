# Proves amb Docker Mongodb

Documentació oficial mongo en docker hub:
> https://hub.docker.com/_/mongo

Downloads the image, creates the container and runs it:

    sudo docker run -it -p 127.0.0.1:27017:27017 --name docker_mongodb mongo

> Host machine can access to port `27017`

### Webgraphy

- [Docker run command](https://docs.docker.com/engine/reference/commandline/run/)