"use strict";
var React = require( "react");

var EducationItem = require("./EducationItem");

var EducationList = React.createClass({
    render: function(){
        return (
        <div>
            {this.props.schools?this.props.schools.map((schoolInfo, index) => {
                return <EducationItem key={this.props.userId+index} schoolInfo={schoolInfo}/>;
            }): (function(){return <div>No schools listed.</div>})}
        </div>
        );
    }
});

module.exports = EducationList;