// Include React
var React = require("react");
var BlogList = require("../blogs/BlogList");
var BlogForm = require("../blogs/BlogForm");
var AlumniWebPortalData = require( '../shared/AlumniDataRouter');
var axios = require('axios');

// var blogs = [
//     {"author":"All-Brand Supplies Dist.", "body":"It's cold in Seattle."},
//     {"author":"Alliance Foods Ltd/Global", "body":"It's warm in Florida."},
//     {"author":"American Foods Llc", "body":"Who cares?"}
// ];

var AlumniHome = React.createClass({
    getInitialState: function(){
        return {blogs: [], searchId: "", action: "list",
              userData: {}
    };
        // this.addBlog = this.addBlog.bind(this);
    },
    componentDidMount: function() {
      this.getUserInfo();
     this.getBlogInfo();
    },
    getUserInfo: function(){
      var self = this;
      axios.get("/api/userinfo").then(function(userData){
        console.log(userData);
        if(userData)
        {
          self.setState({userData: userData.data});
        }
      });
    },
    getBlogInfo: function() {
      var self = this;
        AlumniWebPortalData.getBlogs().then(data => {
          console.log(data.data);
            self.setState({blogs: data.data});
        });
    },
    componentDidUpdate: function(prevProps, prevState){

    },
  handleBlogSubmit: function(blogBody) {
    var blog = { date: Date.now(), email: this.state.userData.email, author: this.state.userData.firstName + ' ' + this.state.userData.lastName, body: blogBody.body};
    this.addBlog(blog);
  },
    addBlog: function(blog){
      var self = this;
      AlumniWebPortalData.createBlog(blog).then(data => {
          console.log(data.data);
            self.getBlogInfo();
        });
    },
  render: function() {
    return (


<div className="container">
  <div className="row">

    {/*Profile Area*/}
    <div className="col span_2_of_8">
      <div className="well profile-well">
        <div className="text-center"><img src="/assets/images/gridImages/17.jpg" className="user-image" alt={this.state.userData.firstName + ' ' + this.state.userData.lastName}/>
        <h4>{this.state.userData.firstName + " " + this.state.userData.lastName}</h4>
        </div>
        <br/>
        <p>Headline</p>
      </div>
    </div>
    {/*End Profile Area*/}

    {/*Blog Area*/}
    <div className="col span_4_of_8">
      <div className="well blog-well">
      <h1 className="page-header">Blog Goes Here<small> Secondary Text</small></h1>
        <div>
          <BlogForm onBlogSubmit={ this.handleBlogSubmit } />
        </div>
          <BlogList blogs={this.state.blogs} />
      </div>
    </div>
    {/*End Blog Area*/}

    {/*Blog Search Area*/}
    <div className="col span_2_of_8">
        <div className="well blogSearch-well">
            <h4>Blog Search</h4>
                <div className="input-group">
                  <input type="text" className="form-control" />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                    <span className="glyphicon glyphicon-search" />
                      </button>
                    </span>
                </div>
        </div>
      </div>
    {/*End Blog Search Area*/}

  </div> 
</div>
    );
  }
});

module.exports = AlumniHome;
