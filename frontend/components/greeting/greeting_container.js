import { connect } from "react-redux";
import Greeting from "./greeting";
import { logout } from "../../actions/session_actions";
import { getCart } from "../../actions/cart_actions";

const msp = state => {
  return {
    currentUser: state.session.currentUser,
    itemsInCart: state.entities.cart.length
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    getCart: () => dispatch(getCart())
  };
};

export default connect(
  msp,
  mdp
)(Greeting);
