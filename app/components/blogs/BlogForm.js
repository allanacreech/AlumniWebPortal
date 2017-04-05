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
                <input role="button" className="btn btn-primary" id="postBtn" type = 'submit' value = 'Post' />
        <input role="button" className="btn btn-default" id="clearPostBtn" onClick={this.clearForm} value = 'Clear' />
        <label htmlFor="category">Category</label>
        <select className="form-control" id="category" value= {this.state.category} onChange= {this.handleCategoryChange}>
        <option></option>
          <option>Business</option>
          <option>Career</option>
          <option>Celebrity Gossip</option>
          <option>DIY</option>
          <option>Economics</option>
          <option>Education</option>
          <option>Entertainment</option>
          <option>Fashion</option>
          <option>Finance</option>
          <option>Food</option>
          <option>Gaming</option>
          <option>History</option>
          <option>Lifestyle</option>
          <option>Marketing</option>
          <option>Medical</option>
          <option>Social Media</option>
          <option>Money</option>
          <option>Nature</option>
          <option>Parenting</option>
          <option>Pet</option>
          <option>Political</option>
          <option>Real Estate</option>
          <option>Shopping</option>
          <option>Sports</option>
          <option>Technology</option>
          <option>Travel</option>
          <option>Wedding</option>
          <option>Other</option>
        </select>
        <input
          type='text'
          placeholder='Say something...'
          value={ this.state.body }
          onChange={ this.handleBodyChange } />
          <hr/>

        
      </form>
    )
  }
});

module.exports =  BlogForm;
