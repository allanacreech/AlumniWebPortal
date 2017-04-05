// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var flash = require('connect-flash');

// var DatabaseSeeder = require("./server/seed-data/seed");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// Requiring passport as we've configured it
var passport = require("./server/config/passport");
// We need to use sessions to keep track of our user's login status
var session = require("express-session");
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// Using the flash middleware provided by connect-flash to store messages in session
 // and displaying in templates
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
Promise = require('bluebird');
mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/AlumniWebPortalDB");
mongoose.connect('mongodb://heroku_4nv3pq7d:v6sfle3odjsd8egg16fu8mcat2@ds019633.mlab.com:19633/heroku_4nv3pq7d/AlumniWebPortalDB');
var db = mongoose.connection;

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

// db.once("open", function() {
//     var seeder = DatabaseSeeder;
//     seeder.runSeed();
//     console.log("Mongoose connection successful.");
// });

// -------------------------------------------------

var routes = require("./server/controllers");
app.use("/api", routes);

// Undefined Routes
app.get('*',function (req, res) {
        res.redirect('/');
    });

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

module.exports = app;