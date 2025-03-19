# Use an official node.js runtime as a parent image
FROM node:22-alpine 

#Set the working directory in container
WORKDIR /app

# Copy package.json and package-lock.json into the container at /app
COPY package*.json .

# Install dependencies
RUN npm install

# Copy rest of the code to the container
COPY . . 

# Expose the port that the app runs on
EXPOSE 5000

# Command to run the app
CMD ["node", "./src/server.js"]