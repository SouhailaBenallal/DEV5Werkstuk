# DEV_5 Werkstuk

## Project setup Localhost
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Build the project
```
npm run build
```

### Compiles and hot-reloads for production
```
npm start
```

### Creates a new migration
```
npm run migrate:make
```

### Runs all migrations that have not yet been run
```
npm run migrate:latest
```
### Compiles and hot-reloads for testing
```
npm run test
```


# Docker for DEV_5 Werkstuk

## Builds, (re)creates, starts, and attaches to containers for a service.
```
docker-compose up --build -d
```

## Stops containers and removes containers, networks, volumes, and images created by up
```
docker-compose down
```

## Create a database in postgres in docker
```
docker exec -it <container-id> bash
```

## Runs all migrations that have not yet been run in docker
```
docker exec <image-name of server> npm run migrate:latest
```