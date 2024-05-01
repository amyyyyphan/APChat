# APChat - Anonymous Real-Time Chat Application

## Requirements

- Java 17
- Maven 3.5+
- Docker

## How to run locally using Docker

1. Navigate to the backend-rest-api directory

2. Convert the Spring Boot application into an executable JAR file
```
mvn clean package
```

3. Navigate to the backend directory

4. Convert the Spring Boot application into an executable JAR file
```
mvn clean package -DskipTests
```

5. Start the application
```
docker compose up
```