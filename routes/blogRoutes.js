const express = require('express');
const Blog = require('../models/blog');

const router = express.Router(); // we create a new instance of router

router.get('/', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { title: 'All blogs', blogs: result });
    })
    .catch(err => {
      console.log(err);
    })
});

router.post('/', (req, res) => {
  // before we save the data of the blog to mongodb
  // we need create a new instance of a Blog first
  const blog = new Blog(req.body)

  // now we use the save method of mongodb
  blog.save()
    .then(result => {
      res.redirect('/blogs');
    })
    .catch(err => consoe.log(err))
})

router.get('/create', (req, res) => {
  res.render('create', { title: 'Create new Blog' });
})

router.get('/:id', (req, res) => {
  const id = req.params.id; // we use 'req.params.whateverYouCallItInTheGetReq'
  // Now we use the 'findById' method of mongoose
  Blog.findById(id)
    .then(result => {
      res.render('details', { blog: result, title: 'Blog details' });
    })
    .catch(err => console.log(err))
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(result => {
      // when this method is used, we can't use the redirect method
      // instead we need to pass some json with the redirect property
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});

/**
 * Now we attach all request to the router but the router need to
 * be attached to an express app. So we export that router, then we import it
 * inside app.js an use it inside of our app with 'app.use'.
 * Treat it like a middleware
 */
module.exports = router;
