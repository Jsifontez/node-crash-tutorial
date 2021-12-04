const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongoDB
const dbURI = 'mongodb+srv://netninja:test1234@cluster0.sej33.mongodb.net/node-tuts?retryWrites=true&w=majority';

// to connect mongo with mongoose we use the 'connect' method of mongoose. Which is an asynchronous task
// If we want to avoid the deprecated warning we pass an object as second argument with 'useNewUrlParser' and 'useUnifiedTopology' with a 'true' value
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000)) // only listen the server after the connection of the db is made
  .catch(error => console.log(error))

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

// middleware & static files

/**
 * Every app.use or app.get is a middleware that executes in the server.
 * The order of the functions matter because is the order of the execution
 * of the middleware
 */
app.use(express.static('public')); // this turn any file insidy that directory accesible from the front-end
app.use(morgan('dev'));

// Routes:

/**
 * here instead of using a file with 'sendFile' method.
 * We now will goin to render a view.
 */
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { title: 'All blogs', blogs: result });
    })
    .catch(err => {
      console.log(err);
    })
})

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
