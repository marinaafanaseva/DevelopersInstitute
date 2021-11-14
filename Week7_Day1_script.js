const http = require('http');
const main = require('./main.js')
const b = 5
console.log(main.largeNumber + b)


const requestListener = function (req, res) {                                                                           
  res.writeHead(200);                                        
  res.end('Hi there at the frontend');                      
  console.log('im listening...')
}

const server = http.createServer(requestListener);          //Your server should run on http://localhost:3000/
server.listen(3000);


const http = require('http');                               //Create a server with http, set the response header and respond with a message
const main = require('./main.js')                           //that outputs the current date and time from the exported module.


const requestListener = function (req, res) {                   
  res.writeHead(200);
  res.end(`the date and the time are currently:${main.date()}`);
}

const server = http.createServer(requestListener);          //Your server should run on http: localhost:8080/
server.listen(8080);