const http = require('http');

// Create an HTTP server and handle requests
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Set the status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
  res.end('Hello, Holberton School!!\n'); // Send a response
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  // Retrieve the server address and log it
  const addressInfo = app.address();
  console.log(`Server is listening on: http://localhost:${addressInfo.port}`);
});
