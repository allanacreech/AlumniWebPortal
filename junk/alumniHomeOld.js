// Include React
var React = require("react");

var AlumniHome = React.createClass({

 
  render: function() {
    return (

      <div>
        {/* Navigation */}
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">Start Bootstrap</a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
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
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* /.container */}
        </nav>
        {/* Page Content */}
        <div className="container">
          <div className="row">
            {/* Blog Entries Column */}
            <div className="col-md-8">
              <h1 className="page-header">
                Page Heading
                <small>Secondary Text</small>
              </h1>
              {/* First Blog Post */}
              <h2>
                <a href="#">Blog Post Title</a>
              </h2>
              <p className="lead">
                by <a href="index.php">Start Bootstrap</a>
              </p>
              <p><span className="glyphicon glyphicon-time" /> Posted on August 28, 2013 at 10:00 PM</p>
              <hr />
              <img className="img-responsive" src="http://placehold.it/900x300" alt />
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.</p>
              <a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right" /></a>
              <hr />
              {/* Second Blog Post */}
              <h2>
                <a href="#">Blog Post Title</a>
              </h2>
              <p className="lead">
                by <a href="index.php">Start Bootstrap</a>
              </p>
              <p><span className="glyphicon glyphicon-time" /> Posted on August 28, 2013 at 10:45 PM</p>
              <hr />
              <img className="img-responsive" src="http://placehold.it/900x300" alt />
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quasi, fugiat, asperiores harum voluptatum tenetur a possimus nesciunt quod accusamus saepe tempora ipsam distinctio minima dolorum perferendis labore impedit voluptates!</p>
              <a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right" /></a>
              <hr />
              {/* Third Blog Post */}
              <h2>
                <a href="#">Blog Post Title</a>
              </h2>
              <p className="lead">
                by <a href="index.php">Start Bootstrap</a>
              </p>
              <p><span className="glyphicon glyphicon-time" /> Posted on August 28, 2013 at 10:45 PM</p>
              <hr />
              <img className="img-responsive" src="http://placehold.it/900x300" alt />
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, voluptates, voluptas dolore ipsam cumque quam veniam accusantium laudantium adipisci architecto itaque dicta aperiam maiores provident id incidunt autem. Magni, ratione.</p>
              <a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right" /></a>
              <hr />
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