var React = require("react");

var ExperienceItem = React.createClass({
    render: function() {
        return (
        <div className="row dataStyle">
            <div className="col-md-12">
                <ul className="list-group" style = {{listStyle: "none"}}>
                <li> {this.props.jobInfo.jobTitle}</li>
                <li> {this.props.jobInfo.company}</li>
                <li> {this.props.jobInfo.jobLocation}</li>
                <li> {this.props.jobInfo.startMonth}/{this.props.jobInfo.startYear} - {this.props.jobInfo.endMonth}/{this.props.jobInfo.endYear} </li>
                <li> {this.props.jobInfo.jobDescription}</li> 
                </ul>
                {/*<a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right" /></a>*/}
                <hr />
              </div>
        </div>
        );
    }
});

module.exports = ExperienceItem;