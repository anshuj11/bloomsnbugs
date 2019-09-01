import { connect } from "react-redux";
import ListingForm from "./listingForm";
import { createListing } from "../../actions/listing_actions";

// const msp = state => {
//   return
// }
const mdp = dispatch => {
  return   {
        submitListing: listingFormData => dispatch(createListing(listingFormData))
    }

}
export default connect(
    null, mdp
)(ListingForm);
        
