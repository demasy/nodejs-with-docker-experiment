FROM node

RUN mkdir -p /home/demasy/app

COPY . /home/demasy/app

WORKDIR /home/demasy/app

RUN npm install

CMD ["npm","start"]