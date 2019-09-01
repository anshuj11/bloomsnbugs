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
      const preview = this.state.photoUrl ? <img src={this.state.photoUrl} className="ListingPhoto"/> : null;
    return (
      <form name="listingForm">
        <label name="Listing Title">
          <input type="text" onChange={this.handleChange("title")}></input>
        </label>
        <label name="Description">
          <input
            type="textarea"
            onChange={this.handleChange("description")}
          ></input>
        </label>
        <label name="Price">
          <input type="text" onChange={this.handleChange("price")}></input>
        </label>
        <label name="Photo">
          <input type="file" onChange={this.handleFile.bind(this)}></input>
            </label>
            {preview}
        <button onClick={this.handleSubmit} className="SessionButton">
          Publish
        </button>
      </form>
    );
  }
}

export default ListingForm;
