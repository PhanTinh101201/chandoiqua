# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:14-alpine  as build

LABEL stage=build
ARG ENVIRONMENT
# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN yarn install 

# Generate the build of the application
RUN yarn build:$ENVIRONMENT

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest
ARG ENVIRONMENT

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
