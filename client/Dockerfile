# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Build the app
RUN npm run build

# Install serve to serve the build directory
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["serve", "-s", "build"]
