var React = require( "react");

var BlogItem = require("./BlogItem");

var BlogList = React.createClass({
    render: function(){
        return (
        <div>
            {this.props.blogs.map(blog => {
                return <BlogItem key={blog._id} blog={blog}/>;
            })}
        </div>
        );
    }
});

module.exports = BlogList;