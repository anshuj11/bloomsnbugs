import React from "react";
import { Link } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
//import { login } from "../actions/session_actions";

const App = function() {
  // window.login = login;
  return (
    <div>
      <h1>Blooms And Bugs </h1>
      <h2>Beautiful, unique, handmade in USA </h2>

      <GreetingContainer />
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default App;
