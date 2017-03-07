// Include React
var React = require("react");

var Child1 = React.createClass({

  // Here we render the component
  render: function() {

    return (
			
   

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Alumni Home Page</h3>

              </div>
              <div className="panel-body">
                <div className="grandchild1">
                <p>
		  <a href="#/gchild1"><button className="btn btn-default">My Profile</button></a>
      <a href="#/gchild3"><button className="btn btn-default">Calendar</button></a>
      <a href="#/gchild3"><button className="btn btn-default">News and Events</button></a>
    	</p>
      {this.props.children}
                </div>
              </div>
            </div>

          </div>

        </div>

      
    );
  }
});
module.exports = Child1;