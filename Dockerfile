FROM node:14-slim
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --loglevel=error
COPY ./ ./
RUN npx tsc
CMD [ "npm", "start" ]