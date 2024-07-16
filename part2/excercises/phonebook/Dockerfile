FROM node:lts-alpine3.20

WORKDIR /phonebook/

COPY public/ /phonebook/public/
COPY src/ /phonebook/src/
COPY package.json /phonebook/
COPY db.json /phonebook/
COPY index.html /phonebook/

RUN npm install

EXPOSE 5173
EXPOSE 3001

CMD ["npm", "run", "start"]