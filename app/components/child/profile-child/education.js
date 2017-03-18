var React = require('react');

var EducationForm = React.createClass( {
  getInitialState: function(){
    return { author: '', body: '' };
    // this.handleAuthorChange = this.handleAuthorChange.bind(this);
    // this.handleBodyChange = this.handleBodyChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  },
  handleAuthorChange: function(e) {
    this.setState({ author: e.target.value });
  },
  handleBodyChange: function(e) {
    this.setState({ body: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let body = this.state.body.trim();
        console.log(author + " " + body);
    if (!body || !author) {
      return;
    }
    console.log("Here");
    this.props.onBlogSubmit({ author: author, body: body });
    this.setState({ author: '', body: '' });
  },
  render: function() {
    return (

    <form method="POST" id="educationForm">
    <div className="form-group">
        {/* #school */}
        <label htmlFor="school" className="form-control-label">School</label>
        <div className="input-group input-group-sm">
        <span className="input-group-addon"><i className="fa fa-institution" aria-hidden="true" /></span>
        <input type="text" className="form-control" id="school" />
        </div>
        {/* #degree */}
        <label htmlFor="degree" className="form-control-label">Degree</label>
        <select className="form-control" id="degree">
        <option>A.A. (Associate of Arts)</option>
        <option>A.S. (Associate of Science)</option>
        <option>A.A.S. (Associate of Applied Science)</option>
        <option>A.E. (Associate of Engineering)</option>
        <option>A.A.A. (Associate of Applied Arts)</option>
        </select>
        {/* #additionalDegree */} 
        <div className="row" id="addDegree">
        <button type="button" id="addDegreeBtn" className="btn btn-default btn-circle btn-add">
            <i className="fa fa-plus" aria-hidden="true" /></button>Add more
        </div>
        <br />
        {/* #fieldOfStudy */}
        <label htmlFor="#fieldOfStudy" className="form-control-label">Field of study</label>
        <input type="text" className="form-control" id="#fieldOfStudy" />  
        {/* #activitiesAndSocieties */} 
        <label htmlFor="#activitiesAndSocieties" className="form-control-label">Activities and Societies</label>
        <textarea className="form-control" id="#activitiesAndSocieties" defaultValue={""} />
        <h6>Ex: Alpha Phi Omega, Marching Band, Volleyball</h6>
        {/* to/from year period with dropbox year selection */} 
        <div className="row">
        <div className="col-sm-9">
            <h6>Time Period</h6>
            <div className="row">
            <div className="col-4 col-sm-6">
                {/* #fromYear */}
                <label htmlFor="fromYear">From Year</label>
                <select className="form-control" id="fromYear">
                <option>1990</option>
                <option>1991</option>
                <option>1992</option>
                <option>1993</option>
                </select>
            </div>
            {/* #toYear */}
            <div className="col-4 col-sm-6">
                <label htmlFor="toYear">To Year</label>
                <select className="form-control" id="toYear">
                <option>1990</option>
                <option>1991</option>
                <option>1992</option>
                <option>1993</option>
                </select>
            </div> {/* /.col-4 col-sm-9  */} 
            </div> {/* /.row */} 
        </div> {/* /.col-sm-9 */} 
        </div> {/* /. row */} 
    </div> {/* /. form-group */}  
    </form>
      
    )
  }
});

module.exports =  EducationForm;
                         
                          