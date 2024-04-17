#!/bin/bash
set -xe

# Start java, the application server.
#service tomcat start
nohup java -jar /usr/local/tomcat9/webapps/citysparkApplication-0.0.1-SNAPSHOT.war > /dev/null 2>&1 &