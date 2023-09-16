const { default: mongoose } = require("mongoose");
const Blog = require("../models/Blog");
const User = require("../models/User");

exports.getAllBlogs = async(req, resp) => {
    const blogs = await Blog.find();
    resp.status(200).send({ blogs: blogs});
}

exports.postABlog =  async(req, resp) => {
    const body = req.body;
    try {
        const existingUser = await User.findById(body.user);
        if(!existingUser) {
            return resp.status(400).json({message: "Unable to find user"});
        }

        const newBlog = new Blog({
            title: body.title,
            image: body.image,
            user: body.user,
            description: body.description,
            user: body.user
        })

        await newBlog.save();
        const updatedUser = await User.updateOne({_id: body.user}, {$push: {blogs: newBlog}})
        return resp.status(200).send({user: existingUser});

    } catch(err) {
        return resp.status(400).send({error: err});
    }
}

exports.updateABlog = async(req, resp) => {
    const blogId = req.params.id;
    // console.log(blogId);
    const body = req.body;
    try {
        let updatedData = await Blog.findByIdAndUpdate(blogId, {
            title: body.title,
            description: body.description
        });
    if(!updatedData) {
        return resp.status(500).json({error: 'Unable to update the blog'});
    }
        return resp.status(200).send({update: updatedData});
    } catch(err) {
        return resp.status(400).send({error: err});
    }
}

exports.deleteABlog = async(req, resp) => {
    const id = req.params.id;
    // console.log(id);
    try {
        const blog = await Blog.findById(id);
        // console.log(blog);
        const userAssociatedWithBlog = await User.findOne({_id: blog.user});
        // console.log(userAssociatedWithBlog.blogs.filter(blog => blog.toString() === id));
        await Blog.findByIdAndRemove(id);
        await User.updateOne({_id: userAssociatedWithBlog._id}, {$pull: {blogs: id}})
        return resp.status(200).send({message: 'Deleted successfully'});
    } catch(err) {
        return resp.status(500).send({message: 'Error occured'});
    }
}

exports.findBlogByUserId = async(req, resp) => {
    try {
        const userBlogs = await User.findById(req.params.id).populate('blogs');
        if(!userBlogs) {
            return resp.status(500).send({message: "No blog found"});
        }
        return resp.status(200).send({blogs: userBlogs});
    } catch(err) {
        return resp.status(400).send({error: "Something went wrong"});
    }
}