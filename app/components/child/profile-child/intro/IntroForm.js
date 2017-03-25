"use strict";
var React = require('react');
var axios = require('axios');

var IntroForm = React.createClass( {
  getInitialState: function(){
    return { imageURL: '', headline: '', country: '', city: '', state: '', zip: ''};
    // this.handleAuthorChange = this.handleAuthorChange.bind(this);
    // this.handleBodyChange = this.handleBodyChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  },  
    componentDidMount: function() {
      this.setUpForm();
    },
  setUpForm: function(){
      var self = this;
      axios.get("/api/userinfo/all").then(function(userData){
     var address = {
       country: "",
       city: "",
       city: "",
       state: "",
       zip: ""
     };
     console.log("address: ");
     console.log(userData.data);
     if(userData.data.address)
     {
       if(userData.data.address.country)
       {
         address.country = userData.data.address.country;
       }
       if(userData.data.address.city)
       {
         address.city = userData.data.address.city;
       }
       if(userData.data.address.state)
       {
         address.state = userData.data.address.state;
       }
        if(userData.data.address.zip)
       {
         address.zip = userData.data.address.zip;
       }
    }
      self.setState({imageURL: userData.data.imageURL, headline: userData.data.headline, country: address.country, city: address.city, state: address.state, zip: address.zip});
    });
  },
  handleHeadlineChange: function(e) {
    this.setState({ headline: e.target.value });
  },
  handleCountryChange: function(e) {
    this.setState({ country: e.target.value });
  },
  handleCityChange: function(e) {
    this.setState({ city: e.target.value });
  },
  handleStateChange: function(e) {
    this.setState({ state: e.target.value });
  },
  handleZipChange: function(e) {
    this.setState({ zip: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    $("#myModal").modal("hide");
    let imageURL = this.state.imageURL.trim();
    let headline = this.state.headline.trim();
    let country = this.state.country.trim();
    let state = this.state.state.trim();
    let city = this.state.city.trim();
    let zip = this.state.zip.trim();
 
    console.log(this.state);
    if(!state || !city)
    {
        return;
    }
    this.props.onIntroSubmit({  imageURL: imageURL, headline: headline, country: country, 
                    state: state, city: city, zip: zip  });
    // this.setState({ imageURL: '', headline: '', country: '', city: '', state: '', zip: ''  });
  },
  render: function() {
    return (


            <div id="myModal" className="modal fade" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <h4 className="modal-title">Edit Intro</h4>
                  </div>

                  {/* Modal-Body :: Bring on the edits! */} 
                  <div className="modal-body">
                    <form id="dataForm" onSubmit={this.handleSubmit}>
                      <div className="form-group">

                        {/* #profilePhoto */} 

                        <div id="mainApp">
                        {/* image upload goes here */}

                        {/* #headLine */} 
                        <label htmlFor="headLine" className="form-control-label">Headline</label>
                        <textarea className="form-control" id="headLine" value= {this.state.headline} onChange= {this.handleHeadlineChange} />
                        {/* #country */}
                        <label htmlFor="country" className="form-control-label">Country</label>
                        <input type="text" className="form-control" id="country" value= {this.state.country} onChange= {this.handleCountryChange}/>
                        {/* #city */}
                        <label htmlFor="city" className="form-control-label">City</label>
                        <input type="text" className="form-control" id="city" value= {this.state.city} onChange= {this.handleCityChange}/>
                        {/* #state */}
                        <label htmlFor="state">State</label>
                        <select className="form-control" id="state" value= {this.state.state} onChange= {this.handleStateChange}>
                        <option>-</option>
                          <option>AL</option>
                          <option>AK</option>
                          <option>AZ</option>
                          <option>AR</option>
                          <option>CA</option>
                        </select>
                        {/* #city */}
                        <label htmlFor="zip" className="form-control-label">Zip</label>
                        <input type="text" className="form-control" id="zip" value= {this.state.zip} onChange= {this.handleZipChange}/>                        
                       </div>
                        <input role="button" type="submit" className="btn btn-default" value="Save" />
                      </div>                       
                    </form>
                  </div>

                  {/* Modal-Footer */} 
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Done</button>
                  </div>
                </div>
              </div>
            </div>
    );
  }
});

module.exports = IntroForm;