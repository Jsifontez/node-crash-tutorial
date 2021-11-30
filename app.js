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
  // res.send('<p>Home page</p>');

  /**
   * for use directory to a response, we use the 'sendFile' method
   * Which we pass the path for the file.
   * However this path needs to be absolute. If we want to that path be
   * relative, we need to indicate relative to what as a second argument.
   *
   * Another way is use the 'path' module which is a core module of node.
   */
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  // res.send('<p>About page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about')
});

// 404 page
// For redirect to a 404 page we use the method 'use' of express which use a sort of
// middleware.
// This work like a switch statement. Express goes from every get request
// If is not a single match, then this use function is executed
// fpr that reason this request need to be at the bottom
app.use((req, res) => {
  res.sendFile('./views/404.html', { root: __dirname });
});
