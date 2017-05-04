var React = require("react");

var ExperienceItem = React.createClass({
    render: function() {
        return (
        <div className="row">
            <div className="col-md-12">
                <ul className="list-group" style = {{listStyle: "none"}}>
                <li id="jTitle"> {this.props.jobInfo.jobTitle}</li>
                <li id="jCompany"> {this.props.jobInfo.company}</li>
                <li id="jLocation"> {this.props.jobInfo.jobLocation}</li>
                <li id="jDate"> {this.props.jobInfo.startMonth}/{this.props.jobInfo.startYear} - {this.props.jobInfo.endMonth}/{this.props.jobInfo.endYear} </li>
                <li id="jDescription"> {this.props.jobInfo.jobDescription}</li> 
                </ul>
                {/*<a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right" /></a>*/}
                <hr />
              </div>
        </div>
        );
    }
});

module.exports = ExperienceItem;