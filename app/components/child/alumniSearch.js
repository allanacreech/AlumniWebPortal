"use strict";
var React = require('react');
var AlumniWebPortalData = require( '../shared/AlumniDataRouter');
var axios = require('axios');
var AlumniList = require("./search-child/AlumniList");

var AlumniSearch = React.createClass( {
  getInitialState: function(){
    return { firstName: '', lastName: '' , degree: '' ,  classOf: '', userData: [] };
  },
  handleFirstNameChange: function(e) {
    this.setState({ firstName: e.target.value} );
  },
  handleLastNameChange: function(e) {
    this.setState({ lastName: e.target.value });
  },
  handleDegreeChange: function(e) {
    this.setState({ degree: e.target.value });
  },
  handleClassOfChange: function(e) {
    this.setState({ classOf: e.target.value });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var searchData = {};
    searchData.firstName = this.state.firstName.trim();
    searchData.lastName = this.state.lastName.trim();
    searchData.degree = this.state.degree.trim();
    searchData.classOf = this.state.classOf.trim();
    var self = this;
    AlumniWebPortalData.findAlumni(searchData).then(data => {
      console.log(data.data);

      self.setState({userData: data.data });
    });
  },

    clearForm: function(){
    this.setState({ firstName: '', lastName: '' , degree: '' ,  classOf: '', userData: [] });
  },
  // Here we render the component
  render: function() {

    return (
			<div className="container">

        {/*Search Form*/}
        <div className="row">
          <div className="col-lg-12">
            <div className="well search-well">
              <h1>Search for Users</h1>
              <p>This search enables you to look for users that match the criteria selected. Enter as much information as you can and click the "Search" button. The results will display below.</p>
              <form className="form-group" action="POST" onSubmit={this.handleSubmit}>

                  {/*First Name*/}
                  <label htmlFor="classMateName" className="form-control-label">Class Mate Name</label>
                  <div className="form-group">
                      <label htmlFor="inputFirstName" className="control-label">First Name</label>
                      <br />
                      <input type="text" className="form-control" id="inputFirstName" placeholder="First Name" name="firstName" onChange={this.handleFirstNameChange} value={this.state.firstName}/>
                  </div>

                  {/*Last Name*/}
                  <div className="form-group">
                      <label htmlFor="inputLastName" className="control-label">Last Name</label>
                      <br />
                      <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" name="lastName" onChange={this.handleLastNameChange} value={this.state.lastName}/>
                  </div>

                  {/*Year Graduated*/}
                  <div className="form-group">
                      <label htmlFor="inputClassOf" className="control-label">Graduating Class Of</label>
                      <br />
                      <input type="text" className="form-control" id="inputClassOf" placeholder="Graduating Class Of" name="classOf" onChange={this.handleClassOfChange} value={this.state.classOf}/>
                  </div>

                  {/*Degree*/}
                  {/*<label htmlFor="degree" className="form-control-label">Degree</label>
                    <select className="form-control" id="degree" value= {this.state.degree} onChange= {this.handleDegreeChange} >
                      <option></option>
                      <option>A.A. (Associate of Arts)</option>
                      <option>A.S. (Associate of Science) </option>
                      <option>A.A.S. (Associate of Applied Science) </option>
                      <option>A.E. (Associate of Engineering) </option>
                      <option>A.A.A. (Associate of Applied Arts) </option>
                      <option>A.P.S. (Associate of Political Science) </option>
                      <option>B.A. (Bachelor of Arts) </option>
                      <option>B.S. (Bachelor of Science) </option>
                      <option>B.F.A. (Bachelor of Fine Arts) </option>
                      <option>B.B.A. (Bachelor of Business Administration) </option>
                      <option>B.Arch. (Bachelor of Architecture) </option>
                      <option>M.A. (Master of Arts) </option>
                      <option>M.F.A. (Master of Fine Arts) </option>
                      <option>M.S. (Master of Science) </option>
                      <option>M.Res. (Master of Research) </option>
                      <option>M.Phil. (Master of Philosophy) </option>
                      <option>LL.M. (Master of Laws) </option>
                      <option>M.B.A. (Master of Business Administration) </option>
                      <option>PhD (Doctor of Philosophy) </option>
                      <option>M.D. (Doctor of Medicine) </option>
                      <option>Ed.D. (Doctor of Education) </option>
                      <option>J.D. (Juris Doctor) </option>
                    </select>*/}
                  
                    <button type="button" className="btn btn-default" id="clearBtn" onClick={this.clearForm}>Clear</button>
                    <input role="button" className="btn btn-primary" id="searchBtn" type = "submit" value = "Search" />

                  </form>
              </div>
            </div>
        </div>

        {/*Search Ressults*/}
        <div className="row">
          <div className="col-lg-12">
            <div className="well searchResults-well">
                <h1>Search Results</h1>
                  <AlumniList userData={this.state.userData}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
});
module.exports = AlumniSearch;