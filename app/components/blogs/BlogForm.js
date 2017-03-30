var React = require('react');

var BlogForm = React.createClass( {
  getInitialState: function(){
    return { body: '', category: "" };
  },
  handleBodyChange: function(e) {
    this.setState({ body: e.target.value });
  },
  handleCategoryChange: function(e) {
    this.setState({ category: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    //let author = this.state.author.trim();
    let body = this.state.body.trim();
    let category = this.state.category.trim();
        console.log( body);
    if (!body && !category) {
      alert("Please choose a category and enter a message.");
      return;
    }
    console.log("Here");
    this.props.onBlogSubmit({ body: body, category: category });
    this.setState({ body: '', category: '' });
  },
  clearForm: function(){
    this.setState({ body: '', category: '' });
  },
  render: function() {
    return (
      <form method = "POST" onSubmit={ this.handleSubmit }>
        <label htmlFor="category">Category</label>
        <select className="form-control" id="category" value= {this.state.category} onChange= {this.handleCategoryChange}>
        <option></option>
          <option>Business</option>
          <option>Services</option>
          <option>Clients</option>
          <option>Contact</option>
          <option>Other</option>
        </select>
        <input
          type='text'
          placeholder='Say something...'
          value={ this.state.body }
          onChange={ this.handleBodyChange } />
          <hr />
        <input role="button" className="btn btn-default" type = 'submit' value = 'Post' />
        <input role="button" className="btn btn-default" onClick={this.clearForm} value = 'Clear' />
      </form>
    )
  }
});

module.exports =  BlogForm;
