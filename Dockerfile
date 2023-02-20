FROM node:16-alpine as pnpm
ENV PNPM_VERSION 5.4 # Control pnpm version dependency explicitly
RUN apk add --no-cache git
RUN apk --no-cache add curl
RUN curl -sL https://unpkg.com/@pnpm/self-installer | node

FROM pnpm as install
ARG NPM_TOKEN
ARG PACKAGE_NAME=""
ENV NPM_CONFIG_LOGLEVEL error
WORKDIR /app
COPY .eslintrc.js .
COPY .gitignore .
COPY *.json ./
COPY index.html .
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
# COPY all libs ...


FROM install as builder
ARG PACKAGE_NAME=""
WORKDIR /app
# install dependencies for the selected package and its dependencies (direct and non-direct)
RUN pnpm install
RUN pnpm build

FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /app
RUN rm -rf ./*
# Copy static assets over
COPY --from=builder /app/dist /usr/share/nginx/html/
ENTRYPOINT ["nginx", "-g", "daemon off;"]