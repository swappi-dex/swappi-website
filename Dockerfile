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
RUN pnpm build:website

FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
# Copy static assets over
COPY --from=builder ./apps/website/dist* ./
ENTRYPOINT ["nginx", "-g", "daemon off;"]