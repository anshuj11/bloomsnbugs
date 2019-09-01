import { connect } from "react-redux";
import { requestAllListings } from "../../actions/listing_actions";
import Listings from "./listings";

const msp = ({ entities }) => {
  console.log("Inside listings container: ", entities.listings);
  //const listings1 = Object.keys(entities.listings).map(
  //id => entities.listings[id]
  // );
  //console.log("listings1: ", listings1);
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
