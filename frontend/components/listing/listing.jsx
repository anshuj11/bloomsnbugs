import React from "react";
import { connect } from "react-redux";
import { requestListing } from "../../actions/listing_actions";

class Listing extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getListing(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <img src={this.props.listing.photoUrl} className="ListingImageBig" />
        <div>${this.props.listing.price}</div>
        <div>Add to Cart</div>
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
