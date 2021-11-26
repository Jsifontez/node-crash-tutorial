const http = require('http'); // is a core node module used to create server

/**
 * this is used to create a local server. If you want to use web sockets yo can store this instance in a constant
 * this recibe a callback function that gonna run every time a request comes to our server
 * This callback take 2 arguments: 'request' and 'response'
 */
const server = http.createServer((req, res) => {
  // the request object have a lot of information like the path/url and the method
  console.log(req.url, req.method);

  /**
   * set header content type using the res argument.
   * Here I can set the different type of content that I want.
   * Like: 'text/plain', 'text/html', so on
   */
  res.setHeader('Content-Type', 'text/html');

  // to know which information we gonna send, we use the 'write' method of 'res'
  res.write('<head><link rel="stylesheet" href="#"></head>');
  res.write('<h1>Hello, ninjas</h1>');
  res.write('<p>Hello again, ninjas</p>');
  // then we need to end the response
  res.end();
});

/**
 * To be able to run the server we need to use the listen method of http.
 * In that method we need to pass the 'port number', the 'host name' (localholst)
 * The third argument is a 'callback function' that run whe we start listening
 */
server.listen(3000, 'localhost', () => {
  console.log('listening for request on port 3000')
})
