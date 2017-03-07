// Include React
var React = require("react");

var Gchild1 = React.createClass({

  // Here we render the component
  render: function() {

    return (

          
              <div className="panel-body">
                <div className="grandchild1">
                <p>
               
		  My Profile Area
                 <img src="http://placehold.it/350x150"></img>

			</p>
                </div>
              </div>
         

    );
  }
});
module.exports = Gchild1;