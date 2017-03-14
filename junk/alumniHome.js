// Include React
import React from "react";
import BlogList from "../blogs/BlogList";
import AlumniWebPortalData from '../shared/data';

var blogs = [
    {"author":"All-Brand Supplies Dist.", "body":"It's cold in Seattle."},
    {"author":"Alliance Foods Ltd/Global", "body":"It's warm in Florida."},
    {"author":"American Foods Llc", "body":"Who cares?"}
];

export class AlumniHome extends React.Component{
    constructor(){
        super();
        this.state = {blogs: []};
    }
    componentDidMount() {
        //let api = new AlumniWebPortalData();
        let self = this;
        // api.getBlogs().then(data => {
        //     self.setState({blogs: data.data});
        // });
        self.setState({blogs: blogs});
    }
  render() {
    return (
      <div>
         {/* Page Content */}
        <div className="container">
          <div className="row">
            {/* Blog Entries Column */}
            <div className="col-md-8">
              <h1 className="page-header">
                Page Heading
                <small>Secondary Text</small>
              </h1>

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
}  	
      