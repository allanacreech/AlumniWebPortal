var React = require('react');

var ImageForm = React.createClass( {
  getInitialState: function(){
    return { file: {}, data: null, filename: ""};
  },  
  handleImageUpload: function(e) {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onload = (upload) => {
      this.setState({
        data: upload.target.result,
        filename: file.name,
        file: file
      });
    };

    //this.setState({ file: e.target.files[0] });
    reader.readAsDataURL(file);
  },
  handleSubmit: function(e) {
    e.preventDefault();
    $("#imageModal").modal("hide");
    console.log(this.state.file);
    console.log(this.state.data);
    //var obj = {fileName: this.state.filename, data: this.state.data, file: this.state.file}
    var obj = this.state.file;
    this.props.onImageSubmit(obj);
    this.setState({ file: {}, data: null, filename: ""});
  },
  render: function() {
    return (
            <div id="imageModal" className="modal fade" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <h4 className="modal-title">Load Profile Image</h4>
                  </div>

                  {/* Modal-Body :: Bring on the edits! */} 
                  <div className="modal-body">
                    <form id="uploadForm" onSubmit={this.handleSubmit}
                        encType="multipart/form-data"
                        method="post">
                        <input type="file" name="userPhoto" onChange= {this.handleImageUpload} />
                        <input type="submit" value="Upload Image" name="submit" />
                        <span id = "status"></span>
                  </form>                                   
                  <img src={this.state.data} />
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

module.exports = ImageForm;