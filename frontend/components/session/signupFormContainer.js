import { connect } from "react-redux";
import SessionForm from "./sessionForm";
import { signup } from "../../actions/session_actions";

const msp = state => {
  return {
    errors: state.errors,
    formType: "signup"
  };
};

const mdp = (dispatch, ownProps) => {

  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(
  msp,
  mdp
)(SessionForm);
