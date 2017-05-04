var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bCrypt = require('bcrypt-nodejs');

var User = require("../models/User.js");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use('login', new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email",
    passReqToCallback : true
  },
  function(req, email, password, done) {
    // When a user tries to sign in this code runs
    console.log(email + " " +password);
      User.findOne(
      {
        email: email
      },
      function(err, dbUser) {
        if (err) return done(err);
      console.log(dbUser);
      // If there's no user with the given email
      if (!dbUser) {
          console.log('User Not Found with username '+ email);
          return done(null, false, 
                {message: 'User Not found.'});                 
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      if (dbUser.password !== password) {
        console.log("invalid password");
        return done(null, false, { message: 'Invalid Password'});
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

passport.use('signup', new LocalStrategy({
    usernameField: "email",
    passReqToCallback : true
  },
  function(req, email, password, done) {
    var findOrCreateUser = function(){
      // find a user in Mongo with provided username
      User.findOne({'email':email},function(err, user) {
        // In case of any error return
        if (err){
          console.log('Error in SignUp: '+err);
          return done(err);
        }
        // already exists
        if (user) {
          console.log('User already exists');
          return done(null, false, 
             { message: 'User Already Exists'});
        } else {
          // if there is no user with that email
          // create the user
          var newUser = new User();
          // set the user's local credentials
          newUser.email = email;
          newUser.password = password; //createHash(password);
          newUser.firstName = req.body.firstName;
          newUser.lastName = req.body.lastName;
          newUser.classOf = req.body.classOf;

 
          // save the user
          newUser.save(function(err) {
            if (err){
              console.log('Error in Saving user: '+err);  
              throw err;  
            }
            console.log('User Registration succesful');    
            return done(null, newUser);
          });
        }
      });
    };

    // Delay the execution of findOrCreateUser and execute 
    // the method in the next tick of the event loop
    process.nextTick(findOrCreateUser);

  }));
     
// In order to help keep authentication state across HTTP requests,
passport.serializeUser(function(user, done) {
  done(null, user._id);
});
 
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

var isValidPassword = function(user, password){
    return bCrypt.compareSync(password, user.password);
}

// Generates hash using bCrypt
var createHash = function(password){
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

// Exporting our configured passport
module.exports = passport;
