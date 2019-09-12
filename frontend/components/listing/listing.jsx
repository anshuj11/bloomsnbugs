import React from "react";
import { connect } from "react-redux";
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
      <div>
        <img src={this.props.listing.photoUrl} className="ListingImageBig" />
        <div>${this.props.listing.price}</div>
        <button className="SessionButton" onClick={this.handleClick.bind(this)}>
          Add to Cart
        </button>
        <div>{this.props.listing.description}</div>
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
