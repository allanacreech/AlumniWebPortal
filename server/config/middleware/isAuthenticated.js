<<<<<<< HEAD
// This is middleware for restrictng routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }

  // If the user isnt' logged in, redirect them to the dashboard which has the login form
  return res.redirect("/");
};
=======
// This is middleware for restrictng routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }

  // If the user isnt' logged in, redirect them to the dashboard which has the login form
  return res.redirect("/");
};
>>>>>>> b18c9ceebc8bdb507233e644acba861fdc7a9a0b
