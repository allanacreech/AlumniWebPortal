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




<div className="section group">

            {/*Profile - Col 1*/}
            <div className="col span_2_of_8">
                <div className="well profile-well">
                        <div className="text-center">
                          <div className="profile-background"></div>
                          <img src="/assets/images/Shari_Pic.JPG" className="user-image" alt={this.state.userData.firstName + ' ' + this.state.userData.lastName}/>
<<<<<<< HEAD
                           <h4>{this.state.userData.firstName + " " + this.state.userData.lastName}</h4>
=======
                          <h4>{this.state.userData.firstName + " " + this.state.userData.lastName}</h4>
>>>>>>> b18c9ceebc8bdb507233e644acba861fdc7a9a0b
                        </div>
                        
                        <br/>
                        <p>Headline</p>

                  </div>
            </div>
            {/*End Profile - Col 1*/}


            {/*Blog - Col 2*/}
            <div className="col span_4_of_8">
                <h1 className="page-header">
                  Blog Goes Here
                  <small> Secondary Text</small>
                </h1>

                <div>
                  <BlogForm onBlogSubmit={ this.handleBlogSubmit } />
                </div>

                <BlogList blogs={this.state.blogs} />

<<<<<<< HEAD
                      
=======
 
>>>>>>> b18c9ceebc8bdb507233e644acba861fdc7a9a0b
            </div>
            {/*End Blog - Col 2*/}


            {/*Blog Search/Events - Col 3*/}
            <div className="col span_2_of_8">

                {/*Blog Search Well*/}
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
                 </div>


                {/*Events Well*/}
                <div className="well">
                  <h4>Blog Categories</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="list-unstyled">
                          <li><a href="#">Category Name</a></li>
                          <li><a href="#">Category Name</a></li>
                          <li><a href="#">Category Name</a></li>
                          <li><a href="#">Category Name</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
                {/*End Blog Search/Events Col*/}


          {/*Footer*/}
          {/*<footer>
            <div className="row">

              <div className="col-lg-12">
                <p>Copyright © Your Website 2014</p>
              </div>

            </div>
            {this.props.children}
          </footer>*/}
          {/*End Footer*/}
</div>




    );
  }
});

module.exports = AlumniHome;
