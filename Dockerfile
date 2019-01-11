FROM node

EXPOSE 80
WORKDIR /app
ENV node_env=production
ENV PORT=80

COPY dist/server/ /app/
COPY package.json /app

RUN npm install

ENTRYPOINT [ "npm", "run", "start:prod" ]
#ENTRYPOINT [ "bash" ]