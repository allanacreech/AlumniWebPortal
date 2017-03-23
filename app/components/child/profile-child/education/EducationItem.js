<<<<<<< HEAD
"use strict";
var React = require("react");

var EducationItem = React.createClass({
    render: function() {
        return (
        <div className="row">
            <div className="col-md-12">
                <ul className="list-group" style = {{listStyle: "none"}}>
                   <li>{this.props.schoolInfo.schoolName}</li>
                   <li>{this.props.schoolInfo.degree}</li>
                   <li>{this.props.schoolInfo.fieldOfStudy}</li>
                   <li>{this.props.schoolInfo.actvities}</li>
                   <li>{this.props.schoolInfo.fromYear} - {this.props.schoolInfo.toYear}</li>
                </ul>
                {/*<a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right" /></a>*/}
                <hr />
              </div>
        </div>
        );
    }
});

module.exports = EducationItem;
=======
"use strict";
var React = require("react");

var EducationItem = React.createClass({
    render: function() {
        return (
        <div className="row dataStyle">
            <div className="col-md-12">
                <ul className="list-group" style = {{listStyle: "none"}}>
                   <li>{this.props.schoolInfo.schoolName}</li>
                   <li>{this.props.schoolInfo.degree}</li>
                   <li>{this.props.schoolInfo.fieldOfStudy}</li>
                   <li>{this.props.schoolInfo.actvities}</li>
                   <li>{this.props.schoolInfo.fromYear} - {this.props.schoolInfo.toYear}</li>
                </ul>
                {/*<a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right" /></a>*/}
                <hr />
              </div>
        </div>
        );
    }
});

module.exports = EducationItem;
>>>>>>> 6a4ffae98a0d14601df290d9dc6697082eac39a6
