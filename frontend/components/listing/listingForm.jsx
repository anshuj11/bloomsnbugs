import React from "react";

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      price: "",
      photoFile: null,
      photoUrl: null
    };
    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("listing[title]", this.state.title);
    formData.append("listing[description]", this.state.description);
    formData.append("listing[price]", this.state.price);
    formData.append("listing[photo]", this.state.photoFile);
    var form = document.getElementsByName("listingForm")[0];
    this.props.submitListing(formData);
    form.reset();
  }

  render() {
    const preview = this.state.photoUrl ? (
      <img src={this.state.photoUrl} className="ListingImage" />
    ) : null;
    return (
      <div className="ListingFormPage">
        <form name="listingForm" className="ListingForm">
          <div>
            <div className="Label" className="InputAndLabel">
              <div className="Label">Title</div>

              <label name="Listing Title">
                <input
                  type="text"
                  onChange={this.handleChange("title")}
                  className="InputField"
                ></input>
              </label>
            </div>
          </div>
          <div>
            <label name="Price" className="InputAndLabel">
              <div className="Label">Price</div>
              <input
                type="text"
                onChange={this.handleChange("price")}
                className="InputField"
              ></input>
            </label>
          </div>
          <div>
            <div className="Label">
              <div className="Label">Description</div>

              <label name="Description">
                <input
                  type="textarea"
                  onChange={this.handleChange("description")}
                  className="InputFieldTextArea"
                ></input>
              </label>
            </div>
          </div>

          <div>
            <div className="Label" className="InputAndLabel">
              <div className="Label">Photo</div>
              <label name="Photo">
                <input
                  type="file"
                  onChange={this.handleFile.bind(this)}
                  className="InputField"
                ></input>
              </label>
            </div>
          </div>
          {preview}
          <button onClick={this.handleSubmit} className="SessionButton">
            Publish
          </button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
