# client/Dockerfile
# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install the missing Babel plugin
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build

# Install serve to serve the build directory
RUN npm install -g serve

# Set the command to run the app
CMD ["serve", "-s", "build"]
