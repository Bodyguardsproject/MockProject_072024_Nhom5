FROM openjdk:21-jdk-slim
COPY target/bodyguards_us-0.0.1-SNAPSHOT.jar app.jar
COPY certs /certs
ENTRYPOINT ["java","-jar","/app.jar"]