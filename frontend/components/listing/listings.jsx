import React from "react";
import { Link } from "react-router-dom";

class Listings extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllListings();
  }
  render() {
    const listings_arr = Object.keys(this.props.listings).map(id => (
      <li key={id} className="Listing">
        {/* {this.props.listings[id].title} */}
        <img src={this.props.listings[id].photoUrl} className="ListingImage" />
        <br />
        <Link to={`/listings/${id}`}>{this.props.listings[id].title}</Link>
      </li>
    ));
    return (
      <div>
        <ul className="ListingsGrid">{listings_arr}</ul>
      </div>
    );
  }
}

export default Listings;
