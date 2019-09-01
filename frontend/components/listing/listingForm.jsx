import React from "react";

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      price: ""
    };
    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const listing = Object.assign({}, this.state);
    console.log("inside listing submit: Listing: ", listing);
    var form = document.getElementsByName("listingForm")[0];
    this.props.submitListing(listing);
    form.reset();
  }

  render() {
    console.log("inside listing form render");
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
          <input type="price" onChange={this.handleChange("price")}></input>
        </label>
        <button onClick={this.handleSubmit} className="SessionButton">
          Publish
        </button>
      </form>
    );
  }
}

export default ListingForm;
