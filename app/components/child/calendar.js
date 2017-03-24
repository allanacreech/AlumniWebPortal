// Include React
var React = require("react");

var Calendar = React.createClass({

  // Here we render the component
  render: function() {

    return (
        <div  className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="page-header">News and Events</h1>
            </div>

 <div className="col-lg-3 col-md-4 col-xs-6 thumb">
        <a className="thumbnail" href="#">
          <img className="img-responsive" src="/assets/images/OhioState.jpg" alt />
        </a>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6 thumb">
        <a className="thumbnail" href="#">
          <img className="img-responsive" src="/assets/images/OhioState.jpg" alt />
        </a>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6 thumb">
        <a className="thumbnail" href="#">
          <img className="img-responsive" src="/assets/images/OhioState.jpg" alt />
        </a>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6 thumb">
        <a className="thumbnail" href="#">
          <img className="img-responsive" src="/assets/images/OhioState.jpg" alt />
        </a>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6 thumb">
        <a className="thumbnail" href="#">
          <img className="img-responsive" src="/assets/images/OhioState.jpg" alt />
        </a>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6 thumb">
        <a className="thumbnail" href="#">
          <img className="img-responsive" src="/assets/images/OhioState.jpg" alt />
        </a>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6 thumb">
        <a className="thumbnail" href="#">
          <img className="img-responsive" src="/assets/images/OhioState.jpg" alt />
        </a>
      </div>
      <div className="col-lg-3 col-md-4 col-xs-6 thumb">
        <a className="thumbnail" href="#">
          <img className="img-responsive" src="/assets/images/OhioState.jpg" alt />
        </a>
      </div>

          
        <hr />
      </div>
      {/*close container*/}
      </div>
    );
  }


});

module.exports = Calendar;