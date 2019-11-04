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
    return (
      <div className="MainPage">
        <div className="subTextAndPics">
          <div className="subText">Beautiful, unique, handmade in USA</div>
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
      </div>
    );
  }
}

export default Listings;
