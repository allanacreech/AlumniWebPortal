var React = require('react');

var ExperienceForm = React.createClass( {
  getInitialState: function(){
    return { jobTitle: '', company: '' , jobLocation: '' , startMonth: '' , startYear: '' , endMonth: '' , endYear: '' , currentJob: '', jobDescription: '' };
  },
  handleJobTitleChange: function(e) {
    this.setState({ jobTitle: e.target.value });
  },
  handleCompanyChange: function(e) {
    this.setState({ company: e.target.value });
  },
  handleJobLocationChange: function(e) {
    this.setState({ jobLocation: e.target.value });
  },
  handleStartMonthChange: function(e) {
    this.setState({ startMonth: e.target.value });
  },
  handleStartYearChange: function(e) {
    this.setState({ startYear: e.target.value });
  },
  handleEndMonthChange: function(e) {
    this.setState({ endMonth: e.target.value });
  },
  handleEndYearChange: function(e) {
    this.setState({ endYear: e.target.value });
  },
  handleJobDescriptionChange: function(e) {
    this.setState({ jobDescription: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    let jobTitle = this.state.jobTitle.trim();
    let company = this.state.company.trim();
    let jobLocation = this.state.jobLocation.trim();
    let startMonth = this.state.startMonth.trim();
    let startYear = this.state.startYear.trim();
    let endMonth = this.state.endMonth.trim();
    let endYear = this.state.endYear.trim();
    let currentJob = this.state.currentJob;
    let jobDescription = this.state.jobDescription.trim();
        console.log(this.state);
    if (!jobTitle || !company ) {
        alert("Enter a job title and a company please");
      return;
    }
    console.log("Here");
    this.props.onExperienceSubmit({ jobTitle: jobTitle , company: company , jobLocation: jobLocation , startMonth: startMonth , startYear: startYear ,
         endMonth: endMonth , endYear: endYear , currentJob: currentJob , jobDescription: jobDescription });
    this.setState({ jobTitle: '', company: '' , jobLocation: '' , startMonth: '' , startYear: '' , endMonth: '' , endYear: '' , currentJob: '', jobDescription: '' });
  },
  render: function() {
    return (
        <div id="workModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                      {/* Modal content*/}
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal">×</button>
                          <h4 className="modal-title">Add Experience</h4>
                        </div>
                        {/* Modal-Body :: Add Your Jobs Here! */} 
                        <div className="modal-body">
                          <form method="POST" id="experienceForm" onSubmit = {this.handleSubmit}>
                            <div className="form-group">
                              {/* #jobTitle */}
                              <label htmlFor="jobTitle" className="form-control-label">Title</label>
                              <input type="text" className="form-control" id="jobTitle" value= {this.state.jobTitle} onChange= {this.handleJobTitleChange} />
                              {/* #company */}
                              <label htmlFor="company" className="form-control-label">Company</label>
                              <div className="input-group input-group-sm">
                                <span className="input-group-addon"><i className="fa fa-building-o" aria-hidden="true" /></span>
                                <input type="text" className="form-control" id="company" value= {this.state.company} onChange= {this.handleCompanyChange} />
                              </div>
                              {/* #location */}
                              <label htmlFor="jobLocation" className="form-control-label">Location</label>
                              <input type="text" className="form-control" id="jobLocation" value= {this.state.jobLocation} onChange= {this.handleJobLocationChange} />
                              {/* start/end work period with dropbox (month + year) selection */} 
                              <div className="row">
                                <div className="col-sm-9">
                                  <h6>Time Period</h6>
                                  <div className="row">
                                    <div className="col-8 col-sm-6">
                                      <h5>From</h5>
                                      {/* #startMonth */}
                                      <label htmlFor="startMonth">Month</label>
                                      <select className="form-control" id="startMonth" value= {this.state.startMonth} onChange= {this.handleStartMonthChange}>
                                        <option>-</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                      </select>
                                      {/* #startYear */}
                                      <label htmlFor="startYear">Year</label>
                                      <select className="form-control" id="startYear" value= {this.state.startYear} onChange= {this.handleStartYearChange}>
                                        <option>-</option>
                                        <option>1990</option>
                                        <option>1991</option>
                                        <option>1992</option>
                                        <option>1993</option>
                                      </select>
                                    </div>
                                    <div className="col-4 col-sm-6">
                                      <h5>To</h5>
                                      {/* #endMonth */}
                                      <label htmlFor="endMonth">Month</label>
                                      <select className="form-control" id="endMonth" value= {this.state.endMonth} onChange= {this.handleEndMonthChange}>
                                        <option>-</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                      </select>
                                      {/* #endYear */}
                                      <label htmlFor="endYear">Year</label>
                                      <select className="form-control" id="endYear" value= {this.state.endYear} onChange= {this.handleEndYearChange}>
                                         <option>-</option>
                                       <option>1990</option>
                                        <option>1991</option>
                                        <option>1992</option>
                                        <option>1993</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* #description */} 
                              <label htmlFor="#jobDescription" className="form-control-label">Description</label>
                              <textarea className="form-control" id="#jobDescription" value= {this.state.jobDescription} onChange= {this.handleJobDescriptionChange} />
                            </div> {/* /.form-group */} 
                            <input role="button" className="btn btn-default" type = "submit" value = "Save" />
                          </form>
                        </div> {/* modal-body */} 
                        {/* Modal-Footer */} 
                        <div className="modal-footer">
                          <button type="button" className="btn btn-default" data-dismiss="modal">Done</button>
                        </div> {/* /.modal-footer */} 
                      </div> {/* /.modal-content */} 
                    </div> {/* /.modal-dialog */} 
                  {/* /.modal-fade */}
                  </div>  
                )
        }
});

module.exports =  ExperienceForm;