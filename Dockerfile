FROM node:8.0
RUN mkdir /QA
ADD . /QA
WORKDIR /QA
RUN npm install

EXPOSE 3000
CMD ["node", "server/index.js"]