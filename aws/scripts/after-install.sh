#!/bin/bash
set -xe


# Copy war file from S3 bucket to tomcat webapp folder
aws s3 cp s3://city-spark-stack-webappdeploymentbucket-pekrbprslirn/citysparkApplication-0.0.1-SNAPSHOT.jar /usr/local/tomcat9/webapps/citysparkApplication-0.0.1-SNAPSHOT.jar


# Ensure the ownership permissions are correct.
chown -R tomcat:tomcat /usr/local/tomcat9/webapps