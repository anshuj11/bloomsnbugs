import React from "react";
import { Route } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/signupFormContainer";
import LoginFormContainer from "./session/loginFormContainer";
import AuthRoute from "../util/route_util";
import ListingFormContainer from "./listing/listingFormContainer";
import ListingsContainer from "./listing/listingsContainer";

const App = function() {
  return (
    <div>
      <h1>Blooms And Bugs </h1>
      <h2>Beautiful, unique, handmade in USA </h2>

      <GreetingContainer />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/listings/new" component={ListingFormContainer} />
      <Route exact path="/" component={ListingsContainer} />
    </div>
  );
};

export default App;
