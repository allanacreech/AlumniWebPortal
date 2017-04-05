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
  handleBlogSubmit: function(blogObj) {
    var blog = { date: Date.now(), authorId: this.state.userData._id, author: this.state.userData.firstName + ' ' + this.state.userData.lastName, body: blogObj.body, category: blogObj.category};
    console.log(blog);
    this.addBlog(blog);
  },
    addBlog: function(blog){
      var self = this;
      AlumniWebPortalData.createBlog(blog).then(data => {
          console.log(data.data);
            self.getBlogInfo();
        });
    },
    handleCategorySubmit: function(e){
      e.preventDefault();
      var categories = [];
      var checkBoxes = document.getElementsByName("category[]");
      for(var i = 0; i < checkBoxes.length; i++)
      {
        console.log(checkBoxes[i].value);
        if(checkBoxes[i].checked)
          categories.push(checkBoxes[i].value);
      }
      var self = this;
        AlumniWebPortalData.filterBlogsByCategory(categories).then(data => {
        console.log(data.data);
        if(data.data && data.data.length != 0)
             self.setState({blogs: data.data});
        else
             self.setState({blogs: []}); /*DGB change at 1:19 pm 4/2/2017 */
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

<div className="container">
  <div className="row" id="mainRow">
    
        <div id="mySidenav" className="sidenav" style={this.state.mySideNavStyle}>
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
          <div id="filterBlock">
            <form encType="multipart/form-data" method = "POST" onSubmit={ this.handleCategorySubmit }>
            <input role="button" className="btn btn-default" type = 'submit' value = 'Filter' style= {{color: 'white'}}/>
            <input role="button" className="btn btn-default" type = 'reset' value = 'Clear'  style= {{color: 'white'}} onClick={this.getBlogInfo}/>
            <hr />
            <div>
              <input type="checkbox" name = "category[]" value="Business" /> Business
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Career" /> Career
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="CelebrityGossip" /> Celebrity Gossip
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="DIY" /> DIY
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Economics" /> Economics
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Education" /> Education
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Entertainment" /> Entertainment
            </div>      
            <div >
              <input type="checkbox" name = "category[]" value="Fashion" /> Fashion
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Finance" /> Finance
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Food" /> Food
            </div>            
             <div >
              <input type="checkbox" name = "category[]" value="Gaming" /> Gaming
            </div>           
            <div >
              <input type="checkbox" name = "category[]" value="History" /> History
            </div>            
            <div >
              <input type="checkbox" name = "category[]" value="Lifestyle" /> Lifestyle
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Marketing" /> Marketing
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Medical" /> Medical
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="SocialMedia" /> Social Media
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Money" /> Money
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Nature" /> Nature
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Parenting" /> Parenting
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Pet" /> Pet
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Political" /> Political
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="RealEstate" /> Real Estate
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Shopping" /> Shopping
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Sports" /> Sports
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Technology" /> Technology
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Travel" /> Travel
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Wedding" /> Wedding
            </div>
            <div >
              <input type="checkbox" name = "category[]" value="Other" /> Other
            </div>
                </form>          
          </div>
      </div>
{/* Use any element to open the sidenav */}
    <i className="fa fa-bars fa-3x"  onClick={this.openNav}></i> 
 </div>        

{/* Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page */}
        
        <div id="main" style={this.state.myMainStyle}>

        
{/*Profile Area*/}
            <div className="col span_2_of_8">
              <div className="well profile-well">
                  <div className="text-center">
                    <img src="/assets/images/cityStateUniversityLogo.jpg" className="user-image" alt={this.state.userData.firstName + ' ' + this.state.userData.lastName}/>
                    <h4>{this.state.userData.firstName + " " + this.state.userData.lastName}</h4>
                  </div>
                  <hr/>

{/* Pulling userData - classOf + headLine info */}
                    <ul className="intro-list-group"style = {{listStyle: "none"}}>
                    <li>Class of {this.state.userData.classOf?this.state.userData.classOf:' ... '}</li>
                    <li>{((this.state.userData.headline&&this.state.userData.headline!='')?('"' + this.state.userData.headline + '"'): '')}</li>
                    </ul>
          
              </div>
            </div>
{/*End Profile Area*/}

{/*Blog Area*/}
            <div className="col span_6_of_8">
              <div className="well blog-well">
                <h1 className="page-header">Share an article or update</h1>
              <div>
                <BlogForm onBlogSubmit={ this.handleBlogSubmit } />
              </div>
                <BlogList blogs={this.state.blogs} />
              </div>
            </div>
{/*End Blog Area*/}        
        
        </div>
      </div>


    );
  }
});

module.exports = AlumniHome;
