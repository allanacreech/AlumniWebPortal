var React = require("react");

var BlogItem = React.createClass({
    render: function() {
        return (
        <div className="row">
            <div className="col-md-12">
                <h4>Author: {this.props.blog.author}</h4>
                <h5><span className="glyphicon glyphicon-time" />Posted on: {this.props.blog.date}</h5>
                <hr />
                {/*<img className="img-responsive" src="http://placehold.it/900x300" alt />*/}
                {/*<hr />*/}
                <textarea value={this.props.blog.body} readOnly></textarea>
                <br />
                
                {/*<a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right" /></a>*/}
                <hr />
              </div>
        </div>
        );
    }
});

module.exports = BlogItem;