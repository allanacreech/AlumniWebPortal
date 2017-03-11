var express = require("express");
var blogRoutes = require("./blogs-api.controller");

var router = express.Router();

router.use('/blogs', blogRoutes);

module.exports = router;