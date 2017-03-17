var User = require("../models/User");
var express = require("express");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

var router = express.Router();
var path = require("path");

  function signin(req, res) {
      console.log("req");
    res.redirect("/api/login/alumnihome");
   }

   function gotoAlumniHome(req, res)
   {
    //    if (req.user){
        res.sendFile(path.join(__dirname + "/../../public/html/alumnihome.html"));       
    //    }
   }

  function goToSignupPage(req, res) {
        res.sendFile(path.join(__dirname + "/../../public/html/signup.html"));       
  }

  // Route for logging user out
  function logout(req, res) {
    req.logout();
    res.sendFile(path.join(__dirname + "/../../public/index.html"));
  }

//   // Route for getting some data about our user to be used client side
//   app.get("/api/user_data", function(req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     }
//     else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });

function goToDashboard(req, res){
        res.sendFile(path.join(__dirname + "/../../public/index.html"));       
}


router.route("/").get(goToDashboard);
router.route("/signin").post(passport.authenticate('login', {
    successRedirect: '/api/login/alumnihome',
    failureRedirect: '/api/login/',
    failureFlash : true 
  }));
router.route("/signup").get(goToSignupPage);
router.route("/signup").post(passport.authenticate('signup', {
		successRedirect: '/api/login/alumnihome',
		failureRedirect: '/api/login/signup',
		failureFlash : true  
	}));
router.route("/logout").get(logout);
router.route("/alumnihome").get(isAuthenticated, gotoAlumniHome);
// router.route("/:count").get(listLimitedSales);

module.exports = router;