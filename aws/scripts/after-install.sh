#!/bin/bash
set -xe


# Copy war file from S3 bucket to tomcat webapp folder
aws s3 cp s3://city-spark-stack-webappdeploymentbucket-pekrbprslirn/citysparkApplication-0.0.1-SNAPSHOT.war /usr/local/tomcat9/webapps/citysparkApplication-0.0.1-SNAPSHOT.war


# Ensure the ownership permissions are correct.
sudo chown -R tomcat:tomcat /usr/local/tomcat9/webapps