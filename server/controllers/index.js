var express = require("express");
var blogRoutes = require("./blogs-api.controller");
var loginRoutes = require("./login-api.controller");
var userInfoRoutes = require("./user-api.controller.js");
var router = express.Router();

router.use('/blogs', blogRoutes);
router.use('/login', loginRoutes);
router.use("/userinfo", userInfoRoutes);
module.exports = router;