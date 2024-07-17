FROM node:lts-alpine3.20

WORKDIR /collections/

COPY public/ /collections/public/
COPY src/ /collections/src/
COPY package.json /collections/
COPY db.json /collections/
COPY index.html /collections/

RUN npm install

EXPOSE 5173
EXPOSE 3001

CMD ["npm", "run", "start"]