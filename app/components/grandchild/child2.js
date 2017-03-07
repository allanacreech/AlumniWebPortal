// Include React
var React = require("react");

var Child2 = React.createClass({

  // Here we render the component
  render: function() {

    return (

<div className="row">
			<div className="col-lg-12">
				<div className="panel panel-danger">
					<div className="panel-heading">
						<h3 className="panel-title">Alumni Profile Page</h3>
					</div>
					<div className="panel-body">
						Panel content
                      
							</div>
						</div>
					</div>
				</div>
                );
  }
});

// Export the component back for use in other files
module.exports = Child2;