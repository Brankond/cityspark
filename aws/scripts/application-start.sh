#!/bin/bash
set -xe

# Start Tomcat, the application server.
cd /opt && sudo chown -R tomcat tomcat/
systemctl start tomcat