const http = require('http');

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!!');
});

server.listen(1245, () => {
  const { address, port } = app.address();
  console.log(`Server is listening on: http://${address}:${port}`);
})
