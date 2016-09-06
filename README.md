# Tarea1-Arquitectura-Software

  App web written in Meteor and AngularJS, which stores and show the ip address of all the requests made.

## Deploy

1. Clone this repository
  ```
  git clone <your_repository>
  ```

2. Install Docker in your computer
  - https://docs.docker.com/engine/installation/linux/ubuntulinux/.


3. cd to the actual repository
  ```
  cd <your_repository>
  ```

4. Run docker-compose
  ```
  docker-compose up -d
  ```

5. Look for the container id
  ```
  docker ps
  ```

5. Install Angular on the container
  ```
  docker exec <container_id> meteor npm install --save angular angular-meteor dateformat
  ```

6. If everything is okay it should be running
  ```
  docker-compose ps
  ```

7. To stop and remove just do
  ```
  docker-compose stop
  ```
  ```
  docker-compose rm
  ```

## Example

- http://52.67.149.100/

## References
- https://www.meteor.com/tutorials/angular/creating-an-app
- https://medium.com/@patriciolpezjuri/empezando-con-docker-86f388316551
- https://docs.docker.com/docker-cloud/infrastructure/link-aws/
- http://www.w3schools.com/angular/
