"use strict";
var React = require('react');

var EducationForm = React.createClass( {
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
    $("#educationModal").modal("hide");
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
  render: function() {
    return (
                <div id="educationModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                      {/* Modal content*/}
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal">×</button>
                          <h4 className="modal-title">Add Education</h4>
                        </div>
                <div className="modal-body">
    <form method="POST" id="educationForm" onSubmit={this.handleSubmit}>
                        {/* Modal-Body :: Add Your Jobs Here! */} 
    <div className="form-group">
        {/* #school */}
        <label htmlFor="school" className="form-control-label">School</label>
        <div className="input-group input-group-sm">
        <span className="input-group-addon"><i className="fa fa-institution" aria-hidden="true" /></span>
        <input type="text" className="form-control" id="school" value= {this.state.schoolName} onChange= {this.handleSchoolNameChange} />
        </div>
        {/* #degree */}
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
        {/* #additionalDegree */} 
        <div className="row" id="addDegree">
        <button type="button" id="addDegreeBtn" className="btn btn-default btn-circle btn-add">
            <i className="fa fa-plus" aria-hidden="true" /></button>Add more
        </div>
        <br />
        {/* #fieldOfStudy */}
        <label htmlFor="fieldOfStudy" className="form-control-label">Field of study</label>
        <input type="text" className="form-control" id="fieldOfStudy" value= {this.state.fieldOfStudy} onChange= {this.handleFieldOfStudyChange} />  
        {/* #activitiesAndSocieties */} 
        <label htmlFor="activitiesAndSocieties" className="form-control-label">Activities and Societies</label>
        <textarea className="form-control" id="activitiesAndSocieties" value= {this.state.activities} onChange= {this.handleActivitiesChange} />
        <h6>Ex: Alpha Phi Omega, Marching Band, Volleyball</h6>
        {/* to/from year period with dropbox year selection */} 
        <div className="row">
        <div className="col-sm-9">
            <h6>Time Period</h6>
            <div className="row">
            <div className="col-4 col-sm-6">
                {/* #fromYear */}
                <label htmlFor="fromYear">From Year</label>
                <select className="form-control" id="fromYear" value= {this.state.fromYear} onChange= {this.handleFromYearChange} >
                <option>-</option>
                <option>1990</option>
                <option>1991</option>
                <option>1992</option>
                <option>1993</option>
                </select>
            </div>
            {/* #toYear */}
            <div className="col-4 col-sm-6">
                <label htmlFor="toYear">To Year</label>
                <select className="form-control" id="toYear" value= {this.state.toYear} onChange= {this.handleToYearChange} >
                <option>-</option>
                <option>1990</option>
                <option>1991</option>
                <option>1992</option>
                <option>1993</option>
                </select>
             </div> {/* /.col-4 col-sm-9  */} 
            </div> {/* /.row */} 
          </div> {/* /.col-sm-9 */} 
        </div> {/* /. row */}                          
      </div> {/* modal-body */} 
    {/* Modal-Footer */} 
      <div className="modal-footer">
          </div> {/* /.form-group */} 
             <button type="button" className="btn btn-default" id="closeBtn" data-dismiss="modal">Close</button>
                  <input role="button" className="btn btn-primary" id="saveBtn" type = "submit" value = "Save" />
                    </form>
                  </div> {/* /.modal-footer */} 
               </div> {/* /.modal-content */} 
             </div> {/* /.modal-dialog */} 
          {/* /.modal-fade */}
      </div> 
    )
  }
});

module.exports =  EducationForm;