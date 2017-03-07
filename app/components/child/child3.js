// Include React
var React = require("react");

var Child3 = React.createClass({

  // Here we render the component
  render: function() {

    return (
			
   

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Extra Panel</h3>
                <div className="jumbotron">
Whatever
                </div>

              </div>
              <div className="panel-body">
                <div className="grandchild1">
                <p>
		  third child
			</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      
    );
  }
});
module.exports = Child3;