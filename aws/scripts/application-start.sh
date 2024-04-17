#!/bin/bash
set -xe

# Start java, the application server.
nohup java -jar /usr/local/tomcat9/webapps/citysparkApplication-0.0.1-SNAPSHOT.war > /dev/null &