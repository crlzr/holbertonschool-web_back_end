const http = require('http');

const host = 'localhost';
const port = 1245;

function requestListener(req, res) {
  res.writeHead(200);
  res.end('Hello Holberton School!');
}

const app = http.createServer(requestListener);
app.listen(port, host, () => {
});

module.exports = requestListener;
