// here goes all schemas for the db
const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Schema is the constructor for create new elements for out db
 * the first arguments it recieve an object for all properties that will have
 * the schema.
 * The second argument is and option.
 * Search in the docs of 'mongoose'
 */
const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, { timestamps: true });

// the model is what allow us to communicate with the db
// the first argument is the singular name of the collection your model is for
// the second argument is the schema which is the model for
const Blog = mongoose.model('Blog', blogSchema);

// the last step is to export the model
module.exports = Blog;
