import React from "react";
import { Route, Link } from "react-router-dom";
import SignupFormContainer from "../session/signupFormContainer";
import LoginFormContainer from "../session/loginFormContainer";

const Greeting = props => {
  console.log("Props: in top", props);

  if (props.currentUser) {
    console.log("Props: in if", props);
    return (
      <div>
        <h3> {props.currentUser.email} </h3>
        <button className="SessionButton" onClick={props.logout}>
          Logout
        </button>
      </div>
    );
  } else {
    console.log("Props: in else", props);

    return (
      <div className="LoginSignUpLinks">
        <Link to="/login">Login</Link>
        <Link to="/signup">Register</Link>
      </div>
    );
  }
};

export default Greeting;
