import { connect } from "react-redux";
import SessionForm from "./sessionForm";
import { login } from "../../actions/session_actions";

const msp = state => {
  return {
    errors: state.errors,
    formType: "login"
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(
  msp,
  mdp
)(SessionForm);
