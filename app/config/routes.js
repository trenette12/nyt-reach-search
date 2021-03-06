var React = require("react");
var router = require("react-router");
var Route = router.Route;
// Include the Router component to contain all our Routes
var Router = router.Router;

var hashHistory = router.hashHistory;
// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;
// Reference the high-level components
var Main = require("..//components/Main");
var Search = require("..//components/children/Search");
var Results = require("..//components/children/Results");
// Export the Routes
module.exports = (
  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="Search" component={Search} />
        <Route path="Results" component={Results} />
        <IndexRoute component={Main} />
        </Route>
  </Router>
);