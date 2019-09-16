import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/sidebar_container";

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
        <Link to={`/listings/${id}`}>
          <img
            src={this.props.listings[id].photoUrl}
            className="ListingImage"
          />
        </Link>
        <br />
        <Link to={`/listings/${id}`}>{this.props.listings[id].title}</Link>
      </li>
    ));
    return (
      <div className= "MainPage">
        <Sidebar/>
        <ul className="ListingsGrid">{listings_arr}</ul>
      </div>
    );
  }
}

export default Listings;
