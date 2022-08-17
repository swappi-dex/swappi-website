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
COPY pnpm-lock.yaml .
COPY pnpm-workspace.yaml .
COPY .eslintrc.js .
COPY .gitignore .
COPY *.json ./
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
COPY apps/website/package.json apps/website/package.json
COPY common/ common/
# COPY all libs ...


FROM install as builder
ARG PACKAGE_NAME=""
WORKDIR /app
# install dependencies for the selected package and its dependencies (direct and non-direct)
RUN pnpm install
COPY apps/ apps/
COPY node_modules/ node_modules/
RUN pnpm build:website