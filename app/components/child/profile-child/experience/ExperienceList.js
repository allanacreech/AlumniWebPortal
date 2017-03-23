"use strict";
var React = require( "react");

var ExperienceItem = require("./ExperienceItem");

var ExperienceList = React.createClass({
    render: function(){
        return (
        <div>
            {this.props.jobs?this.props.jobs.map((jobInfo, index) => {
                return <ExperienceItem key={this.props.userId+index} jobInfo={jobInfo}/>;
            }): (function(){return <div>No jobs listed.</div>})()}
        </div>
        );
    }
});

module.exports = ExperienceList;