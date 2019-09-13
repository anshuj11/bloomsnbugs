import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { requestListing } from "../../actions/listing_actions";
import { addToCart } from "../../actions/cart_actions";

class Listing extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getListing(this.props.match.params.id);
  }
  handleClick() {
    addToCart(this.props.listing);
  }
  render() {
    return (
      <div className="ListingBox">
        <img src={this.props.listing.photoUrl} className="ListingImageBig" />
        <div className="ListingDetails">
          <div className="Price">Price: ${this.props.listing.price}</div>
          <button className="CartButton" onClick={this.handleClick.bind(this)}>
            Add to Cart
          </button>
          <p className="fas fa-heart"></p>
          <Link to="/">Browse Listings</Link>
          <div>{this.props.listing.description}</div>
        </div>
      </div>
    );
  }
}

const msp = ({ entities }, ownProps) => {
  return {
    listing: entities.listings[ownProps.match.params.id]
  };
};

const mdp = dispatch => {
  return { getListing: id => dispatch(requestListing(id)) };
};
export default connect(
  msp,
  mdp
)(Listing);
