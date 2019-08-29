import React from "react";
import { Route } from "react-router-dom";
import SignupFormContainer from "../session/signupFormContainer";
import LoginFormContainer from "../session/loginFormContainer";

const Greeting = props => {
  if (props.currentUser) return <h3>return {props.currentUser.username}</h3>;
  else {
    return (
      <div>
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
      </div>
    );
  }
};

export default Greeting;
