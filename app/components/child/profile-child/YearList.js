"use strict";
var React = require( "react");

var YearList = React.createClass({
    handleYearChange: function(e){
        this.props.onYearChange({year: e.target.value});
    },
    render: function(){
        return (
        <select className="form-control" id={this.props.id} value= {this.props.year} onChange= {this.handleYearChange}>
            {(this.props.id=="startYear"||this.props.id=="fromYear")?<option></option>:<option></option>}
            {this.props.years.map((year, index) => {
                return <option key={this.props.id+index}>{year}</option>;
            })}
        </select>
        );
    }
});

module.exports = YearList;

// {new Date().getFullYear()}