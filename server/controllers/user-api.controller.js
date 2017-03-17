var User = require("../models/User");
var express = require("express");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

var router = express.Router();
var path = require("path");

function getUserLoginInfo(req, res){
    console.log(req.user);
        res.json(req.user);       
}


router.route("/").get(isAuthenticated, getUserLoginInfo);
// router.route("/:count").get(listLimitedSales);

module.exports = router;