// Include React
var React = require("react");
var EducationList = require("./profile-child/education/EducationList");
var EducationForm = require("./profile-child/education/EducationForm");
var ExperienceList = require("./profile-child/experience/ExperienceList");
var ExperienceForm = require("./profile-child/experience/ExperienceForm");
var IntroForm = require("./profile-child/intro/IntroForm");
var IntroItem = require("./profile-child/intro/IntroItem");
var AlumniWebPortalData = require( '../shared/AlumniDataRouter');
var axios = require('axios');

var Profile = React.createClass({
    getInitialState: function(){
        return {searchId: "", action: "list",
              userData: {}
              };
     },
    componentDidMount: function() {
      this.getUserInfo();
    },
    // componentDidUpdate: function() {
    //   this.getUserInfo();
    // },
    getUserInfo: function(){
      var self = this;
      axios.get("/api/userinfo/all").then(function(profileData){
        console.log(profileData.data.address);
        if(profileData)
        {
          self.setState({userData: profileData.data});
        }
      });
    },
  handleIntroSubmit: function(introData) {
      var self = this;
      console.log(introData);
      AlumniWebPortalData.updateIntroData(this.state.userData._id, introData).then(data => {
          console.log(data.data);
            self.getUserInfo();
        });
    },

  handleImageSubmit: function(imageObject) {
     var self = this;
      // console.log(imageObject.fileName);
      // console.log(imageObject.data);
      console.log(imageObject);
      AlumniWebPortalData.updateImageData(this.state.userData._id, imageObject).then(data => {
          console.log(data.data);
            self.getUserInfo();
        });
    },

  handleExperienceSubmit: function(experienceData) {
      var self = this;
      console.log(experienceData);
      AlumniWebPortalData.updateExperienceData(this.state.userData._id, experienceData).then(data => {
          console.log(data.data);
            self.getUserInfo();
        });
    },

  handleEducationSubmit: function(educationData) {
      var self = this;
      console.log(educationData);
      AlumniWebPortalData.updateEducationData(this.state.userData._id, educationData).then(data => {
          console.log(data.data);
            self.getUserInfo();
        });
    },

  render: function() {

     return (

      <div>
        <div className="container">

          {/* :: Intro container */}

          {/* PLACE PROFILE INTRO INFO HERE! */}
          <div className="panel panel-default">
          <div className="panel-body">
          {/*<div className="jumbotron" style={{paddingRight: 30, paddingLeft: 30}}>*/}
            
            <div className="introData">
              <IntroItem userData={this.state.userData} onImageSubmit = {this.handleImageSubmit}/>
            </div>
            {/* Trigger the modal with a button */}
            <button type="button" id="editIntroBtn" className="btn btn-default btn-circle " data-toggle="modal" data-target="#myModal"><i className="fa fa-pencil" aria-hidden="true" /></button>
           
            {/* ::Edit Intro:: Modal */}

            <IntroForm onIntroSubmit = {this.handleIntroSubmit} />
          </div> {/* /.panel-default */} 
         </div> {/* /.panel-body */} 
        </div> {/* /.container */}


        {/* :: Experience container */} 

        <div className="container">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4 className="panel-title">Experience</h4>

              {/* horizontal line */} 
              <hr/>
              
              {/* PLACE EXPERIENCE INFO HERE! */}
                <div id = "jobListing">
                  <ExperienceList userId = {this.state.userData._id} jobs={this.state.userData.jobs} />
                </div>
              <div className="card">
                <div className="card-block">
                  {/* Trigger (Add Work) modal with a button */}
                  <button type="button" id="addExperienceBtn" className="btn btn-default btn-circle " data-toggle="modal" data-target="#workModal"><i className="fa fa-pencil" aria-hidden="true" /></button>
                  {/* ::Add (Work) Experience :: Modal */}

                  <ExperienceForm onExperienceSubmit = {this.handleExperienceSubmit} />
                </div> {/* /.card-block */}
              </div> {/* /.card */} 
            </div> {/* /.panel-body */}
          </div> {/* /.panel-default */}
        </div> {/* /.container */} 


        {/* :: Education container */} 

        <div className="container">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4 className="panel-title">Education</h4>

              {/* horizontal line */} 
              <hr/>

              {/* PLACE EDUCATION INFO HERE! */}
                <EducationList userId = {this.state.userData._id} schools = {this.state.userData.schools} />

              <div className="card">
                <div className="card-block">
                  {/* Trigger (Add Education) modal with a button */}
                  <button type="button" id="addEducationBtn" className="btn btn-default btn-circle " data-toggle="modal" data-target="#educationModal"><i className="fa fa-pencil" aria-hidden="true" /></button>
                  {/* ::Add (Education) College :: Modal */}
                        <EducationForm onEducationSubmit ={this.handleEducationSubmit} />

                </div> {/* /.card-block */} 
              </div> {/* /.card */} 
            </div> {/* /.panel-body */}
          </div> {/* /.panel-default */}
        </div> {/* /.container */}



      </div>
    );
  }
});

    
module.exports = Profile;