import React from "react";
import { Link } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/signupFormContainer";
import LoginFormContainer from "./session/loginFormContainer";
import AuthRoute from "../util/route_util";
//import { login } from "../actions/session_actions";

const App = function() {
  // window.login = login;
  return (
    <div>
      <h1>Blooms And Bugs </h1>
      <h2>Beautiful, unique, handmade in USA </h2>

      <GreetingContainer />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
  );
};

export default App;
