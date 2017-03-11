var React = require("react");

var BlogItem = React.createClass({
    render: function() {
        return (
        <div className="row">
            <div className="col-md-12">
                <p><span className="glyphicon glyphicon-time" /> Posted on: {this.props.blog.date} by {this.props.blog.author}</p>
                <hr />
                {/*<img className="img-responsive" src="http://placehold.it/900x300" alt />*/}
                {/*<hr />*/}
                <p>{this.props.blog.body}</p>
                {/*<a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right" /></a>*/}
                <hr />
              </div>
        </div>
        );
    }
});

module.exports = BlogItem;
