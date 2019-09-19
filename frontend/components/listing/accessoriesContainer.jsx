import { connect } from "react-redux";
import { requestAllListings } from "../../actions/listing_actions";
import Accessories from "./accessories";

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
)(Accessories);

