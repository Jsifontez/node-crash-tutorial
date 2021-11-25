const http = require('http'); // is a core node module used to create server

/**
 * this is used to create a local server. If you want to use web sockets yo can store this instance in a constant
 * this recibe a callback function that gonna run every time a request comes to our server
 * This callback take 2 arguments: 'request' and 'response'
 */
const server = http.createServer((req, res) => {
  console.log('request made');
});

/**
 * To be able to run the server we need to use the listen method of http.
 * In that method we need to pass the 'port number', the 'host name' (localholst)
 * The third argument is a 'callback function' that run whe we start listening
 */
server.listen(3000, 'localhost', () => {
  console.log('listening for request on port 3000')
})
