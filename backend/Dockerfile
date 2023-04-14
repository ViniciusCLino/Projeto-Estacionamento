FROM node:16

COPY . ./app

WORKDIR /app

ARG NODE_ENV="development"
ARG PORT="3000"

ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT

RUN npm install
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]
