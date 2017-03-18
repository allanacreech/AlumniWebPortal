// This is middleware for restrictng routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }

  // If the user isnt' logged in, redirect them to the dashboard which has the login form
  return res.redirect("/");
};

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
    blog.email = req.body.email;
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
