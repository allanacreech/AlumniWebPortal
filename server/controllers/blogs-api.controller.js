var Blog = require("../models/Blog");
var express = require("express");

var router = express.Router();

function listBlogs(req, res){
    Blog.list().then(function(data){
        console.log(data);
        res.json(data);
    });
}

function createBlog(req, res){
    var blog = {};
    blog.author = req.body.author;
    blog.body = req.body.body;
    Blog.create(blog).then(function(data){
        console.log(data);
        res.json(data);
    });
}

router.route("/").get(listBlogs);
router.route("/create").post(createBlog);
// router.route("/:count").get(listLimitedSales);

module.exports = router;