"use strict";
var React = require("react");

var AlumniItem = React.createClass({
    render: function() {
        return (
        <div className="row">
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-body">

                        {/*Look into making this into an accordian, so they have to click to see all of the info, vs only seeing basic info (i.e. name)*/}
                <ul className="list-group" style = {{listStyle: "none"}}>
                   <li>Name: {this.props.userInfo.lastName + ", " + this.props.userInfo.firstName }</li>
                   {/*<li>Degree: {this.props.userInfo.degree}</li>*/}
                   <li>Class of: {this.props.userInfo.classOf}</li>
                </ul>
                </div>
                </div>
                {/*<a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right" /></a>*/}
                <hr />
              </div>
        </div>
        );
    }
});

module.exports = AlumniItem;