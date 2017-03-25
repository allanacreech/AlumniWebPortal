"use strict";
var React = require('react');

var AlumniSearch = React.createClass( {
  getInitialState: function(){
    return { schoolName: '', degree: '' , fieldOfStudy: '' , activities: '' , fromYear: '' , toYear: '' };
  },
  handleSchoolNameChange: function(e) {
    this.setState({ schoolName: e.target.value });
  },
  handleDegreeChange: function(e) {
    this.setState({ degree: e.target.value });
  },
  handleFieldOfStudyChange: function(e) {
    this.setState({ fieldOfStudy: e.target.value });
  },
  handleActivitiesChange: function(e) {
    this.setState({ activities: e.target.value });
  },
  handleFromYearChange: function(e) {
    this.setState({ fromYear: e.target.value });
  },
  handleToYearChange: function(e) {
    this.setState({ toYear: e.target.value });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    let schoolName = this.state.schoolName.trim();
    let degree = this.state.degree.trim();
    let fieldOfStudy = this.state.fieldOfStudy.trim();
    let activities = this.state.activities.trim();
    let fromYear = this.state.fromYear.trim();
    let toYear = this.state.toYear.trim();
        console.log(this.state);
    if (!schoolName || !degree || !fieldOfStudy) {
        alert("Enter a school name, a degree, and a field of study please");
      return;
    }
    console.log("Here");
    this.props.onEducationSubmit({ schoolName: schoolName, degree: degree, fieldOfStudy: fieldOfStudy, 
                  activities: activities , fromYear: fromYear , toYear: toYear });
    this.setState({ schoolName: '', degree: '' , fieldOfStudy: '' , activities: '' , fromYear: '' , toYear: '' });
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
              <form className="form-group">

                  {/*First Name*/}
                  <label htmlFor="classMateName" className="form-control-label">Class Mate Name</label>
                  <div className="form-group">
                      <label for="inputFirstName" className="control-label">First Name</label>
                      <br />
                      <input type="text" className="form-control" id="inputFirstName" placeholder="First Name" name="firstName"/>
                  </div>

                  {/*Last Name*/}
                  <div className="form-group">
                      <label for="inputLastName" className="control-label">Last Name</label>
                      <br />
                      <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" name="lastName"/>
                  </div>

                  {/*Year Graduated*/}
                  <div className="form-group">
                      <label for="inputClassOf" className="control-label">Graduating Class Of</label>
                      <br />
                      <input type="text" className="form-control" id="inputClassOf" placeholder="Graduating Class Of" name="classOf"/>
                  </div>

                  {/*Degree*/}
                  <label htmlFor="degree" className="form-control-label">Degree</label>
                    <select className="form-control" id="degree" value= {this.state.degree} onChange= {this.handleDegreeChange} >
                      <option>-</option>
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
                    </select>
                  
                    <input role="button" className="btn btn-default" type = "submit" value = "Search" />

                  </form>
              </div>
            </div>
        </div>

        {/*Search Ressults*/}
        <div className="row">
          <div className="col-lg-12">
            <div className="well searchResults-well">
                <h1>Search Results</h1>

            </div>
          </div>
        </div>

      </div>
    );
  }
});
module.exports = AlumniSearch;