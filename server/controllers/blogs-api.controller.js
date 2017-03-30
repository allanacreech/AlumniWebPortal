var Blog = require("../models/Blog");
var express = require("express");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

var router = express.Router();

function listBlogs(req, res){
    Blog.list().then(function(data){
        console.log(data);
        res.json(data);
    });
}

function filterBlogsByCategory(req, res){
    console.log(req.query);
//    var categories = ["Business", "Clients"];
    Blog.filterBlogsByCategory(req.query.categories).then(function(data){
        console.log(data);
        res.json(data);
    });
}

function createBlog(req, res){
    var blog = {};
    blog.date = req.body.date;
    blog.authorId = req.body.authorId;
    blog.author = req.body.author;
    blog.category = req.body.category;
    blog.body = req.body.body;
    Blog.create(blog).then(function(data){
        console.log(data);
        res.json(data);
    });
}

router.route("/").get(isAuthenticated, listBlogs);
router.route("/create").post(isAuthenticated, createBlog);
router.route("/filterBlogsByCategory").get(isAuthenticated, filterBlogsByCategory);

module.exports = router;