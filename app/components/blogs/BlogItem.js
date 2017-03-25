var React = require("react");
var moment = require("moment");

var BlogItem = React.createClass({
    render: function() {
        return (
        <div className="row">
            <div className="col-md-12">
                <h5>Author: {this.props.blog.author}</h5>
                <h6><span className="glyphicon glyphicon-time" />Posted on: {moment(this.props.blog.date).format("dddd, MM/DD/YYYY, h:mm a")}</h6>
                
                <div className="row">
                <textarea value={this.props.blog.body} readOnly></textarea>
                
                {/*<a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right" /></a>*/}
                <hr />
             </div> 
           </div>
        </div>
        );
    }
});

module.exports = BlogItem;
