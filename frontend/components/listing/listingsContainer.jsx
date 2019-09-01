import { connect } from "react-redux";
import { requestAllListings } from "../../actions/listing_actions";
import Listings from "./listings";

const msp = ({ entities }) => { 
  return {
    listings: entities.listings
  };
};

const mdp = dispatch => {
  return { getAllListings: () => dispatch(requestAllListings()) };
};
export default connect(
  msp,
  mdp
)(Listings);
