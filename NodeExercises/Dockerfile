FROM ubuntu

RUN sudo apt-get update
RUN sudo apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup | sudo bash -
RUN sudo apt-get install -y npm

COPY ./src

# install modules
RUN cd /src; npm install

EXPOSE 1500

# run app 
CMD["node", "/src/Server.js"]