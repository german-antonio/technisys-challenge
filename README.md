# Technisys Code Challenge
Code challenge resolution for a job application at Technisys

## Prerequisites
In order to run this project you need to have NodeJS installed (along with NPM).
Optionally, Docker will be needed to run the containerized version (see below).

## Installation

### Local
Open a terminal and clone the repository into your local machine 
```
git clone git@github.com:german-antonio/technisys-challenge.git
```
and then run
```
npm install
```
to install the required npm packages.


### Containerized version
If you'd prefer to install the containerized version, open a terminal and type in the following command to pull the image
```
docker pull germanantonio/technisys-challenge:latest
```

## Usage

### Local
On a terminal, navigate to the repository's directory, and type
```
npm start
```
You can also run
```
npm test
```
if you want to run the unit tests and check their coverage.

### Containerized version
Open a terminal and run the image with the following command
```
docker run -t -d germanantonio/technisys-challenge:latest
```
The container should now be running. Use the following command to see the image running
```
docker ps
```
Check the output of this command to find the container ID
```
CONTAINER ID   IMAGE                                      COMMAND                  CREATED          STATUS      
227b353e2b39   germanantonio/technisys-challenge:latest   "docker-entrypoint.s…"   6 minutes ago    Up 6 minutes
```
Use the container ID to open a shell inside the container
```
docker exec -it <container-id> /bin/bash
```
Once inside the container, you can run 
```
npm start
```
to run the application, or
```
npm test
```
to run the unit tests and check the code coverage.