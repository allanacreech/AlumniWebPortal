var Blog = require("../models/Blog");
var express = require("express");

var router = express.Router();

function listBlogs(req, res){
    Blog.list().then(data => {
        console.log(data);
        res.json(data);
    });
}

router.route("/blogs").get(listBlogs);
// router.route("/:count").get(listLimitedSales);

module.exports = router;