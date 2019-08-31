import { connect } from "react-redux";
import Greeting from "./greeting";
import { logout } from "../../actions/session_actions";

const msp = ({ entities, session }) => {
  console.log("Greetings container: ", session.currentUser);
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
