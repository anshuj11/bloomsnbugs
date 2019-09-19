import { connect } from "react-redux";
import { requestAllListings } from "../../actions/listing_actions";
import Dresses from "./dresses";

const msp = ({ entities }) => {
  //   debugger;
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
)(Dresses);

