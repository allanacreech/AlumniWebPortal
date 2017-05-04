"use strict";
var React = require("react");

var EducationItem = React.createClass({
    render: function() {
        return (
        <div className="row">
            <div className="col-md-12">
                <ul className="list-group" style = {{listStyle: "none"}}>
                   <li id="eSchoolName">{this.props.schoolInfo.schoolName}</li>
                   <li id="eDegree">{this.props.schoolInfo.degree}</li>
                   <li id="eFieldOfStudy">{this.props.schoolInfo.fieldOfStudy}</li>
                   <li id="eSchoolActivities">{this.props.schoolInfo.activities}</li>
                   <li id="eSchoolYears">{this.props.schoolInfo.fromYear} - {this.props.schoolInfo.toYear}</li>
                </ul>
                {/*<a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right" /></a>*/}
                <hr />
              </div>
        </div>
        );
    }
});

module.exports = EducationItem;
