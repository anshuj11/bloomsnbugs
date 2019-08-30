import { connect } from "react-redux";
import SessionForm from "./sessionForm";
import { login } from "../../actions/session_actions";

const msp = state => {
  console.log("inside MSP", state.errors);
  return {
    errors: state.errors,
    formType: "login"
  };
};

const mdp = (dispatch, ownProps) => {
  console.log("inside MSD: loginFormContainer");
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(
  msp,
  mdp
)(SessionForm);
