FROM node
# FROM oraclelinux:7-slim

WORKDIR /opt/oracle

RUN apt-get update && \
    apt-get install -y libaio1 unzip wget
RUN wget https://download.oracle.com/otn_software/linux/instantclient/instantclient-basiclite-linuxx64.zip && \
    unzip instantclient-basiclite-linuxx64.zip && \
    rm -f instantclient-basiclite-linuxx64.zip && \
    cd instantclient* && \
    rm -f *jdbc* *occi* *mysql* *jar uidrvci genezi adrci && \
    echo /opt/oracle/instantclient* > /etc/ld.so.conf.d/oracle-instantclient.conf && \
    ldconfig

ENV DEMASY_DATABASE_USER=demasy \
    DEMASY_DATABASE_PASSWORD=demasy \
    DEMASY_DATABASE_CONNECT_STRING="localhost:1521/ORCLCDB.localdomain" \
    DEMASY_DATABASE_POOL_MIN=5 \
    DEMASY_DATABASE_POOL_MAX=5 \
    DEMASY_DATABASE_POOL_INCREMENT=0 \
    DEMASY_DATABASE_CLIENT="/home/demasy/app/libs/oracle/instantclient_19_12"

LABEL maintainer "Ahmed El-Demasy <founder@demasy.io>"

RUN mkdir -p /home/demasy/app

COPY . /home/demasy/app

# RUN mkdir -p /home/demasy/u01/oracle/client/instantclient_19_8

# COPY /instantclient_19_8 /home/demasy/u01/oracle/client/instantclient_19_8

WORKDIR /home/demasy/app

RUN npm install

CMD ["npm","start"]

# CMD ["node","-v"]
