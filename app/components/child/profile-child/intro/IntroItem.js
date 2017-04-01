var React = require("react");
var ImageForm = require ("./ImageForm");
var axios = require("axios");
// var AlumniWebPortalData = require( '../../shared/AlumniDataRouter');

var IntroItem = React.createClass({
    getInitialState: function(){
    return {imageData: {}
            };
     }, 
    render: function() {
        return (
        <div className="row">
            <div className="col-md-12">
                {/* Profile Picture */}
                <div className="text-center">
                    <img src="/assets/images/cityStateUniversityLogo.jpg" className="profilePic"/>
                <br />
                {/* Trigger the modal with a button */}
                    <button type="button" id="editImageBtn" className="btn btn-default btn-circle " data-toggle="modal" data-target="#imageModal"><i className="fa fa-pencil" aria-hidden="true" /></button>
                
                    {/* ::Edit Intro:: Modal */}
                    <ImageForm onImageSubmit = {this.props.onImageSubmit} userID = {this.props.userData._id}/>
                </div>
                <h2 style={{textAlign: 'center'}}>{this.props.userData.firstName + " " + this.props.userData.lastName}</h2>
                <ul className="intro-list-group"style = {{listStyle: "none"}}>
                    <li className="list-group-item">Class of {this.props.userData.classOf?this.props.userData.classOf:<span>not specified</span>}</li>
                    <li className="list-group-item">{((this.props.userData.address&&this.props.userData.address.city)?(this.props.userData.address.city + ', '):'')
                      + ((this.props.userData.address&&this.props.userData.address.state)?this.props.userData.address.state:'')}</li>
                    <li className="list-group-item">{((this.props.userData.headline&&this.props.userData.headline!='')?('"' + this.props.userData.headline + '"'): '')}</li>
                </ul>
            <hr/>
          </div>
        </div>
        );
    }
});

module.exports = IntroItem;
