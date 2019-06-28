FROM node:lts-alpine
LABEL maintainer="paul.craig@cds-snc.ca"

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . /app

RUN npm install --production
RUN npm run build:ssr

# start app
EXPOSE 4000
CMD ["npm", "run", "serve:ssr"]
