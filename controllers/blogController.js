const Blog = require('../models/blog');

const blog_index = (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { title: 'All blogs', blogs: result });
    })
    .catch(err => {
      console.log(err);
    })
};

const blog_details = (req, res) => {
  const id = req.params.id; // we use 'req.params.whateverYouCallItInTheGetReq'
  // Now we use the 'findById' method of mongoose
  Blog.findById(id)
    .then(result => {
      res.render('details', { blog: result, title: 'Blog details' });
    })
    .catch(err => console.log(err))
};

const blog_create_get = (req, res) => {
  res.render('create', { title: 'Create new Blog' });
};

const blog_create_post = (req, res) => {
  // before we save the data of the blog to mongodb
  // we need create a new instance of a Blog first
  const blog = new Blog(req.body)

  // now we use the save method of mongodb
  blog.save()
    .then(result => {
      res.redirect('/blogs');
    })
    .catch(err => consoe.log(err))
};

const blog_delete = (req, res) => {
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
}

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete
}