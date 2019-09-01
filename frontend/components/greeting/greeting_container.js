import { connect } from "react-redux";
import Greeting from "./greeting";
import { logout } from "../../actions/session_actions";

const msp = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  msp,
  mdp
)(Greeting);
