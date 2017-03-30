"use strict";
var React = require( "react");
var AlumniItem = require("./AlumniItem");

var AlumniList = React.createClass({
    render: function(){
        return (
        <div>
            {(this.props.userData&&this.props.userData.length!=0)?this.props.userData.map((user, index) => {
                return <AlumniItem key={user._id} userInfo={user}/>;
            }): (function(){return <div>No alumni found.</div>})()}
        </div>
        );
    }
});

module.exports = AlumniList;