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


<div className="section group">

            {/*Profile - Col 1*/}
            <div className="col span_2_of_8">
                <div className="well profile-well">
                        <div className="text-center">
                          <div className="profile-background"></div>
                          <img src="/assets/images/Shari_Pic.JPG" className="user-image" alt="Your Name"/>
                          <h4>User Name</h4>
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

                      <ul className="pager">
                        <li className="previous">
                          <a href="#">← Older</a>
                        </li>
                        <li className="next">
                          <a href="#">Newer →</a>
                        </li>
                      </ul>
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
