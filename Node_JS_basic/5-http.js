var app = require('http');
var url = require('url');

var routes = {
    '/': 
}

//create a server object:
app.createServer(function (req, res) {
  res.write('Hello Holberton School!'); //write a response to the client
  res.end(); //end the response
}).listen(1245); //the server object listens on port 1245

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
    res.writeHead(200);
    res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`);
};

module.exports requestListener;

