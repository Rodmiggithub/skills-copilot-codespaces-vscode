// Require the 'http' module
const http = require('http');

// Define the port number
const port = 3000;

// Create a server with a simple request handler
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send a response
  res.end('Hello, this is a simple web server!');
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});