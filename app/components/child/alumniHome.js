// Include React
var React = require("react");
var BlogList = require("../blogs/BlogList");
var BlogForm = require("../blogs/BlogForm");
var AlumniWebPortalData = require( '../shared/AlumniDataRouter');

// var blogs = [
//     {"author":"All-Brand Supplies Dist.", "body":"It's cold in Seattle."},
//     {"author":"Alliance Foods Ltd/Global", "body":"It's warm in Florida."},
//     {"author":"American Foods Llc", "body":"Who cares?"}
// ];

var AlumniHome = React.createClass({
    getInitialState: function(){
        return {blogs: [], searchId: "", action: "list"};
        // this.addBlog = this.addBlog.bind(this);
    },
    componentDidMount: function() {
     this.getInfo();
     },
    getInfo: function() {
      var self = this;
        AlumniWebPortalData.getBlogs().then(data => {
          console.log(data.data);
            self.setState({blogs: data.data});
        });
    },
    componentDidUpdate: function(prevProps, prevState){

    },
  handleBlogSubmit: function(blog) {
    // let blogs = this.state.blogs;
    // let newBlogs = blogs.concat([blog]);
    // this.setState({ blogs: newBlogs });
    // axios.post(this.props.url, comment)
    //   .catch(err => {
    //     console.error(err);
    //     this.setState({ data: comments });
    //   });
    this.addBlog(blog);
  },
    addBlog: function(blog){
      var self = this;
      AlumniWebPortalData.createBlog(blog).then(data => {
          console.log(data.data);
            self.getInfo();
        });
    },
  render: function() {
    return (
      <div>

         {/* Page Content */}

        {/* Navigation */}
        {/*<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">*/}
          {/*<div className="container">*/}
            {/* Brand and toggle get grouped for better mobile display */}
            {/*<div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">Start Bootstrap</a>
            </div>*/}
            {/* Collect the nav links, forms, and other content for toggling */}
            {/*<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>*/}
            {/*</div>*/}
            {/* /.navbar-collapse */}
          {/*</div>*/}
          {/* /.container */}
        {/*</nav>*/}
        {/* Page Content */}

        <div className="container">
          <div className="row">
            {/* Blog Entries Column */}
            <div className="col-md-8">
              <h1 className="page-header">
                Page Heading
                <small>Secondary Text</small>
              </h1>
              <div>
                <BlogForm onBlogSubmit={ this.handleBlogSubmit } />
              </div>
              {/*Blog Posts */}
              <BlogList blogs={this.state.blogs} />

              {/* Pager */}
              <ul className="pager">
                <li className="previous">
                  <a href="#">← Older</a>
                </li>
                <li className="next">
                  <a href="#">Newer →</a>
                </li>
              </ul>
            </div>
            {/* Blog Sidebar Widgets Column */}
            <div className="col-md-4">
              {/* Blog Search Well */}
              <div className="well">
                <h4>Blog Search</h4>
                <div className="input-group">
                  <input type="text" className="form-control" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <span className="glyphicon glyphicon-search" />
                    </button>
                  </span>
                </div>
                {/* /.input-group */}
              </div>
              {/* Blog Categories Well */}
              <div className="well">
                <h4>Blog Categories</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-unstyled">
                      <li><a href="#">Category Name</a>
                      </li>
                      <li><a href="#">Category Name</a>
                      </li>
                      <li><a href="#">Category Name</a>
                      </li>
                      <li><a href="#">Category Name</a>
                      </li>
                    </ul>
                  </div>
                  {/* /.col-lg-6 */}
                  <div className="col-lg-6">
                    <ul className="list-unstyled">
                      <li><a href="#">Category Name</a>
                      </li>
                      <li><a href="#">Category Name</a>
                      </li>
                      <li><a href="#">Category Name</a>
                      </li>
                      <li><a href="#">Category Name</a>
                      </li>
                    </ul>
                  </div>
                  {/* /.col-lg-6 */}
                </div>
                {/* /.row */}
              </div>
              {/* Side Widget Well */}
              <div className="well">
                <h4>Side Widget Well</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
              </div>
            </div>
          </div>
          {/* /.row */}
          <hr />
          {/* Footer */}
          <footer>
            <div className="row">
              <div className="col-lg-12">
                <p>Copyright © Your Website 2014</p>
              </div>
              {/* /.col-lg-12 */}
            </div>
            {this.props.children}
            {/* /.row */}
          </footer>
        </div>
        {/* /.container */}
      </div>
    );
  }
});

module.exports = AlumniHome;
      