const express = require('express');
const Blog = require('../models/Blog');
const { getAllBlogs, postABlog, deleteABlog, updateABlog, findBlogByUserId } = require('../controller/userBlogController');
const router = express.Router();

router.get('/blogs', getAllBlogs);

router.post('/blog',postABlog);

router.put("/blog/update/:id", updateABlog);

router.delete('/blog/delete/:id', deleteABlog);

router.get('/blog/userId/:id', findBlogByUserId);

module.exports = router;