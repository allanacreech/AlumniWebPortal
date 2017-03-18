// Include React
var React = require("react");

var Profile = React.createClass({


  render: function() {
    return (
      <div>
        <div className="container">

          {/* intro.js :: intro container */}

          {/* PLACE PROFILE INTRO INFO HERE! */}
          <div className="jumbotron" style={{paddingRight: 30, paddingLeft: 30}}>
            
            {/* Profile Picture */}
            <div className="text-center">
              <img src="/assets/images/gridImages/17.jpg" className="profilePic"/>
            </div>

            <h2 style={{textAlign: 'center'}}>Michelle Obama</h2>
            <h3 style={{textAlign: 'center'}}>First Lady | Harvard Law School 1988 </h3>
            <p style={{textAlign: 'center'}}> Chicago, IL </p>
            <p style={{textAlign: 'center'}}> " S U P E R - W O M A N "</p>

            {/* Trigger the modal with a button */}
            <button type="button" id="editIntroBtn" className="btn btn-default btn-circle " data-toggle="modal" data-target="#myModal"><i className="fa fa-pencil" aria-hidden="true" /></button>
           
            {/* ::Edit Intro:: Modal */}

            <div id="myModal" className="modal fade" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <h4 className="modal-title">Edit Intro</h4>
                  </div>

                  {/* Modal-Body :: Bring on the edits! */} 
                  <div className="modal-body">
                    <form method="POST" id="dataForm">
                      <div className="form-group">

                        {/* #profilePhoto */} 

                        <div id="mainApp" />
                        {/* #firstName */}
                        <label htmlFor="firstName" className="form-control-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" />
                        {/* #lastName */}
                        <label htmlFor="lastName" className="form-control-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" />
                        {/* #headLine */} 
                        <label htmlFor="headLine" className="form-control-label">Headline</label>
                        <textarea className="form-control" id="headLine" defaultValue={""} />
                        {/* #currentPosition */}
                        <label htmlFor="currentPosition" className="form-control-label">Current Position</label>
                        <input type="text" className="form-control" id="currentPosition" />
                        {/* #education */}
                        <label htmlFor="education" className="form-control-label">Education</label>
                        <input type="text" className="form-control" id="education" />
                        {/* #country */}
                        <label htmlFor="country" className="form-control-label">Country</label>
                        <input type="text" className="form-control" id="country" />
                        {/* #city */}
                        <label htmlFor="city" className="form-control-label">City</label>
                        <input type="text" className="form-control" id="city" />
                        {/* #state */}
                        <label htmlFor="state">State</label>
                        <select className="form-control" id="state">
                          <option>AL</option>
                          <option>AK</option>
                          <option>AZ</option>
                          <option>AR</option>
                          <option>CA</option>
                        </select>
                        {/* #summary */} 
                        <label htmlFor="summary" className="form-control-label">Summary</label>
                        <textarea className="form-control" id="summary" defaultValue={""} />
                      </div>
                    </form>
                  </div>

                  {/* Modal-Footer */} 
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* /.jumbotron */} 
        </div> {/* /.container */}


        {/* experience.js :: Experience container */} 

        <div className="container">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4 className="panel-title">Experience</h4>

              {/* horizontal line */} 
              <hr/>
              
              {/* PLACE EXPERIENCE INFO HERE! */}
                <p>Job Title</p>
                <p>Company</p>
                <p>Start Date - End Date</p>
                <p>Description</p>

              <div className="card">
                <div className="card-block">
                  {/* Trigger (Add Work) modal with a button */}
                  <button type="button" id="addExperienceBtn" className="btn btn-default btn-circle " data-toggle="modal" data-target="#workModal"><i className="fa fa-pencil" aria-hidden="true" /></button>
                  {/* ::Add (Work) Experience :: Modal */}
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
                          <form method="POST" id="experienceForm">
                            <div className="form-group">
                              {/* #jobTitle */}
                              <label htmlFor="jobTitle" className="form-control-label">Title</label>
                              <input type="text" className="form-control" id="jobTitle" />
                              {/* #company */}
                              <label htmlFor="company" className="form-control-label">Company</label>
                              <div className="input-group input-group-sm">
                                <span className="input-group-addon"><i className="fa fa-building-o" aria-hidden="true" /></span>
                                <input type="text" className="form-control" id="company" />
                              </div>
                              {/* #location */}
                              <label htmlFor="location" className="form-control-label">Location</label>
                              <input type="text" className="form-control" id="location" />
                              {/* start/end work period with dropbox (month + year) selection */} 
                              <div className="row">
                                <div className="col-sm-9">
                                  <h6>Time Period</h6>
                                  <div className="row">
                                    <div className="col-8 col-sm-6">
                                      <h5>From</h5>
                                      {/* #startMonth */}
                                      <label htmlFor="startMonth">Month</label>
                                      <select className="form-control" id="startMonth">
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                      </select>
                                      {/* #startYear */}
                                      <label htmlFor="startYear">Year</label>
                                      <select className="form-control" id="startYear">
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
                                      <select className="form-control" id="endMonth">
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                      </select>
                                      {/* #endYear */}
                                      <label htmlFor="endYear">Year</label>
                                      <select className="form-control" id="endYear">
                                        <option>1990</option>
                                        <option>1991</option>
                                        <option>1992</option>
                                        <option>1993</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* #currentJob :: checkbox */}
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id="currentJob" />
                                  <label htmlFor="currentJob"> I currently work here</label> 
                                  {/* </.col-lg-6 */}
                                </div>
                                {/* </row */}
                              </div>
                              <br />
                              {/* #description */} 
                              <label htmlFor="#description" className="form-control-label">Description</label>
                              <textarea className="form-control" id="#description" defaultValue={""} />
                            </div> {/* /.form-group */} 
                          </form>
                        </div> {/* modal-body */} 
                        {/* Modal-Footer */} 
                        <div className="modal-footer">
                          <button type="button" className="btn btn-default" data-dismiss="modal">Save</button>
                        </div> {/* /.modal-footer */} 
                      </div> {/* /.modal-content */} 
                    </div> {/* /.modal-dialog */} 
                  </div> {/* /.modal-fade */} 
                </div> {/* /.card-block */}
              </div> {/* /.card */} 
            </div> {/* /.panel-body */}
          </div> {/* /.panel-default */}
        </div> {/* /.container */} 


        {/* edication.js ::Education container */} 

        <div className="container">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4 className="panel-title">Education</h4>

              {/* horizontal line */} 
              <hr/>

              {/* PLACE EDUCATION INFO HERE! */}
                <p>College</p>
                <p>Degree</p>
                <p>Field of Study</p>
                <p>Start Year - End Year</p>

              <div className="card">
                <div className="card-block">
                  {/* Trigger (Add Education) modal with a button */}
                  <button type="button" id="addEducationBtn" className="btn btn-default btn-circle " data-toggle="modal" data-target="#educationModal"><i className="fa fa-pencil" aria-hidden="true" /></button>
                  {/* ::Add (Education) College :: Modal */}
                  <div id="educationModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                      {/* Modal content*/}
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal">×</button>
                          <h4 className="modal-title">Add Education</h4>
                        </div>
                        {/* Modal-Body :: Add Your Jobs Here! */} 
                        <div className="modal-body">
                          
                        {/*<Education onEducationSubmit ={this.handleEducationSubmit} />*/}

                          </div> {/* /.modal-body */} 
                        {/* Modal-Footer */} 
                        <div className="modal-footer">
                          <button type="button" className="btn btn-default" data-dismiss="modal">Save</button>
                        </div>
                      </div> {/* /. modal-content */} 
                    </div> {/* /.modal-dialog */} 
                  </div> {/* /.modal-fade */} 
                </div> {/* /.card-block */} 
              </div> {/* /.card */} 
            </div> {/* /.panel-body */}
          </div> {/* /.panel-default */}
        </div> {/* /.container */}


        {/* organizations.js :: Organizations container */} 

        <div className="container">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4 className="panel-title">Organizations</h4>

              {/* horizontal line */} 
              <hr/>

              {/* PLACE ORGANIZATIONS INFO HERE! */}
                <p>Organization</p>
                <p>Description</p>

              <div className="card">
                <div className="card-block">
                  {/* Trigger (Add Organizations) modal with a button */}
                  <button type="button" id="addOrganizationBtn" className="btn btn-default btn-circle " data-toggle="modal" data-target="#organizationsModal"><i className="fa fa-pencil" aria-hidden="true" /></button>
                  {/* ::Add Organizations :: Modal */}
                  <div id="organizationsModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                      {/* Modal content*/}
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal">×</button>
                          <h4 className="modal-title">Add Organizations</h4>
                        </div>
                        {/* Modal-Body :: Add Organizations Here! */} 
                        <div className="modal-body">
                          <div className="form-group">
                            {/* #organization */}
                            <label htmlFor="organization" className="form-control-label">Organization</label>
                            <input type="text" className="form-control" id="organization" />
                            {/* #activeMember :: checkbox */}
                            <div className="row">
                              <div className="col-lg-6">
                                <input type="checkbox" id="activeMember" />
                                <label htmlFor="activeMember">Active Member</label> 
                                {/* </.col-lg-6 */}
                              </div>
                              {/* </row */}
                            </div>
                            <br />
                            {/* #description */} 
                            <label htmlFor="#organizationDescription" className="form-control-label">Description</label>
                            <textarea className="form-control" id="#organizationDescription" defaultValue={""} />
                          </div> {/* /.form-group */} 
                        </div> {/* modal-body */} 
                        {/* Modal-Footer */} 
                        <div className="modal-footer">
                          <button type="button" className="btn btn-default" data-dismiss="modal">Save</button>
                        </div> {/* /.modal-footer */} 
                      </div> {/* /.modal-content */} 
                    </div> {/* /.modal-dialog */} 
                  </div> {/* /.modal-fade */} 
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