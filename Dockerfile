# Use the official Node.js image as the base image
FROM node

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from the root directory into the container
COPY package*.json ./

# Install server-side dependencies
RUN npm install

# Change the working directory to the client folder
WORKDIR /usr/src/app/client

# Copy package.json and package-lock.json from the client folder into the container
COPY client/package*.json ./

# Install client-side dependencies
RUN npm install

# Copy the rest of the client code into the container
COPY ./client .

# Build the client code
RUN npm run build

# Change the working directory back to the root directory
WORKDIR /usr/src/app

# Copy the rest of the server code into the container
COPY . .

# Expose the port on which the server will run
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
