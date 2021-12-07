const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router(); // we create a new instance of router

router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/create', blogController.blog_create_get);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

/**
 * Now we attach all request to the router but the router need to
 * be attached to an express app. So we export that router, then we import it
 * inside app.js an use it inside of our app with 'app.use'.
 * Treat it like a middleware
 */
module.exports = router;
