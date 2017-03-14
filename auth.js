// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
var mui = require('material-ui/Card');

// Grabs the Routes
var routes = require("./app/config/routes");

// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// routes
// const authRoutes = require('./server/routes/auth');
// app.use('/auth', authRoutes);

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000')
});
