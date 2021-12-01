const express = require('express');

// express app
const app = express();

// listen for request. Same way that we do with 'http.createServer'
app.listen(3000); // this also return an instance of the created server

// register view engines. For inject dynamic data to the views
// for that we use 'set' method which take two arguments.
// 1st The name of the property
// 2nd the value
app.set('view engine', 'ejs');
/**
 * By default 'ejs' will search for the templates in 'views' directory
 * If we want to use another directory, we need to configure that directory
 * using 'set' method again
 */
// app.set('views', 'myviews');

/**
 * Every app.use or app.get is a middleware that executes in the server.
 * The order of the functions matter because is the order of the execution
 * of the middleware
 */
app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next(); // this a function to jump for the next middleware
});

/**
 * here instead of using a file with 'sendFile' method.
 * We now will goin to render a view.
 */
app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];

  // here we going to tell how the view is called and his extension
  // We can pass data using and object with the name of the props to pass down with the second parameter
  res.render('index', { title: 'Home', blogs });
});

app.use((req, res, next) => {
  console.log('in the next middleware');
  next(); // this a function to jump for the next middleware
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create new Blog' });
})

/**
 * 404 page
 * For redirect to a 404 page we use the method 'use' of express which use a sort of
 * middleware.
 * This work like a switch statement. Express goes from every get request
 * If is not a single match, then this use function is executed
 * fpr that reason this request need to be at the bottom
 */
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
