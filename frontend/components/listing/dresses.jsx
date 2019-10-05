import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/sidebar_container";
import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 650,
  itemSelector: ".home-pin-wrap",
  columnWidth: 270,
  fitWidth: true
};

class Dresses extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllListings();
  }
  render() {
    console.log("Props.Listing: ", this.props.listings);
    const dress_arr = Object.keys(this.props.listings).filter(id =>
      this.props.listings[id].title.includes("Dress")
    );
    console.log("Dress.Arr: ", dress_arr);
    const listings_arr = dress_arr.map(id => (
      <li key={id} className="Listing">
        <div className="home-pin-wrap">
          {/* {this.props.listings[id].title} */}
          <Link to={`/listings/${id}`}>
            <img
              src={this.props.listings[id].photoUrl}
              className="ListingImage"
            />
          </Link>
          <br />
          <Link to={`/listings/${id}`}>{this.props.listings[id].title}</Link>
        </div>
      </li>
    ));
    console.log("Listings Array: ", listings_arr);
    return (
      <div className="MainPage">
        <Sidebar />
        <ul className="ListingsGrid">
          <Masonry
            className="home-masonry"
            elementType="div"
            updateOnEachImageLoad={true}
            options={masonryOptions}
          >
            {listings_arr}
          </Masonry>
        </ul>
      </div>
    );
  }
}

export default Dresses;
