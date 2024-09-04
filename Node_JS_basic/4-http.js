const http = require('http');

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!!');
});

app.listen(1245, () => {
  const { address, port } = http.address();
  console.log(`Server is listening on: http://${address}:${port}`);
})
