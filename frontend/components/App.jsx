import React from "react";
import { Route } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/signupFormContainer";
import LoginFormContainer from "./session/loginFormContainer";
import AuthRoute from "../util/route_util";
import ListingFormContainer from "./listing/listingFormContainer";
import ListingsContainer from "./listing/listingsContainer";
//import Navbar from "./navbar/navbarContainer";

const App = function() {
  return (
    <div>
      {/* <Navbar /> */}
      <GreetingContainer />
      <Route exact path="/" component={ListingsContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/listings/new" component={ListingFormContainer} />
    </div>
  );
};

export default App;
