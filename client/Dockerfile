# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install --prefer-offline

# Set the environment variable to avoid OpenSSL issues
ENV NODE_OPTIONS=--openssl-legacy-provider

# Copy the rest of the project files to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]

