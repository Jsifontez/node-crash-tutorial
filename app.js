const express = require('express');

// express app
const app = express();

// listen for request. Same way that we do with 'http.createServer'
app.listen(3000); // this also return an instance of the created server

/**
 * Now you can listen all the request like GET, POST, DELETE and so on
 * for that we use the 'get' method of express. Which take 2 arguments.
 * the first one is the directory that we will be listening and the second
 * a callback function with request and response parameters
 */
app.get('/', (req, res) => {
  // here we can set the Content-Type implicit usign 'send' method of response object
  // this method also set the status code
  res.send('<p>Home page</p>');
});
