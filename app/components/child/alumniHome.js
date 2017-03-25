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
              userData: {}, mySideNavStyle: {width:"0px"},
              myMainStyle: {marginLeft:"0px"}
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
    
    openNav: function(){
     this.setState({myMainStyle: {marginLeft: "250px"}, mySideNavStyle: {width:"250px"}});
    },

 
    closeNav: function(){
     this.setState({myMainStyle: {marginLeft: "0px"}, mySideNavStyle: {width:"0px"}});
    },

  render: function() {
    return (


<div className="container-fluid">
  <div className="row" id="mainRow">

    <div>
      <i className="fa fa-bars fa-5x"  onClick={this.openNav}></i> 
        <div id="mySidenav" className="sidenav" style={this.state.mySideNavStyle}>
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
          <a href="#">Business</a>
          <a href="#">Career</a>
          <a href="#">Celebrity Gossip</a>
          <a href="#">DIY</a>
          <a href="#">Economics</a>
          <a href="#">Education</a>
          <a href="#">Entertainment</a>
          <a href="#">Fashion</a>
          <a href="#">Finance</a>
          <a href="#">Food</a>
          <a href="#">Gaming</a>
          <a href="#">History</a>
          <a href="#">Lifestyle</a>
          <a href="#">Marketing</a>
          <a href="#">Medical</a>
          <a href="#">Soical Media</a>
          <a href="#">Nature</a>
          <a href="#">Parenting</a>
          <a href="#">Pet</a>
          <a href="#">Political</a>
          <a href="#">Real Estate</a>
          <a href="#">Shopping</a>
          <a href="#">Shopping</a>
          <a href="#">Sports</a>
          <a href="#">Technology</a>
          <a href="#">Travel</a>
          <a href="#">Wedding</a>
      </div>
{/* Use any element to open the sidenav */}
    
         
      </div> 
{/* Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page */}
        
        <div id="main" style={this.state.myMainStyle}>

        
{/*Profile Area*/}
            <div className="col span_4_of_8">
              <div className="well profile-well">
                  <div className="text-center">
                    <img src="/assets/images/gridImages/17.jpg" className="user-image" alt={this.state.userData.firstName + ' ' + this.state.userData.lastName}/>
                    <h4>{this.state.userData.firstName + " " + this.state.userData.lastName}</h4>
                  </div>
                  <hr/>

{/* Pulling userData - classOf + headLine info */}
                    <ul className="intro-list-group"style = {{listStyle: "none"}}>
                    <li>Class of {this.state.userData.classOf}</li>
                    <li>{('"' + this.state.userData.headline + '"')}</li>
                    </ul>
          
              </div>
            </div>
{/*End Profile Area*/}

{/*Blog Area*/}
            <div className="col span_4_of_8">
              <div className="well blog-well">
                <h1 className="page-header">Blog Goes Here</h1>
              <div>
                <BlogForm onBlogSubmit={ this.handleBlogSubmit } />
              </div>
                <BlogList blogs={this.state.blogs} />
              </div>
            </div>
{/*End Blog Area*/}

{/*Blog Search Area*/}
            {/*<div className="col span_2_of_8">
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
              </div>*/}
{/*End Blog Search Area*/}
        
        
        </div>
      </div>
{/*End of the Sidebar menu*/}


  
  {/*end of container*/}
</div>
    );
  }
});

module.exports = AlumniHome;
