FROM node
RUN mkdir -p /home/demasy/app
COPY . /home/demasy/app
CMD ["npm","start"]