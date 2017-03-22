var React = require("react");

var IntroItem = React.createClass({
    render: function() {
        return (
        <div className="row dataStyle">
            <div className="col-md-12">
                {/* Profile Picture */}
                <div className="text-center">
                    <img src="/assets/images/cityStateUniversityLogo.jpg" className="profilePic"/>
                </div>
                <h2 style={{textAlign: 'center'}}>{this.props.userData.firstName + " " + this.props.userData.lastName}</h2>
                <ul className="intro-list-group"style = {{listStyle: "none"}}>
                   <li>Class of {this.props.userData.classOf?this.props.userData.classOf:"(not specified)"}</li>
                   <li>{(this.props.userData.address?this.props.userData.address.city + ', ':"") 
                       + (this.props.userData.address?this.props.userData.address.state:"")}</li>
                   <li>{(this.props.userData.headline?'"' + this.props.userData.headline + '"':"")}</li>
</ul>
                <hr />
              </div>
        </div>
        );
    }
});

module.exports = IntroItem;