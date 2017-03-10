// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
// var Info = require("../components/Info");
// var Chat = require("../components/Chat");

var AlumniHome = require("../components/child/alumniHome")
var Profile = require("../components/child/profile")
var Calendar = require("../components/child/calendar")

var Store = require("../components/store/store")

var Gchild1 = require("../components/grandchild/gchild1")
var Gchild2 = require("../components/grandchild/gchild2")

var Gchild3 = require("../components/grandchild/gchild3")


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Info or Chat show the appropriate component */}

      <Route path="alumniHome" component={AlumniHome} />
      <Route path="profile" component={Profile} />
      <Route path="calendar" component={Calendar} />


      <Route path="store" component={Store} />

      <Route path="galumniHome" component={Gchild1} />
      <Route path="gprofile" component={Gchild2} />
      <Route path="gcalendar" component={Gchild3} />

      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={AlumniHome} />

    </Route>
  </Router>

);
