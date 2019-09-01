import React from "react";
import { Link } from "react-router-dom";
import ListingsContainer from "../listing/listingsContainer";

const Greeting = props => {
  if (props.currentUser) {
    return (
      <div>
        <h3>Welcome {props.currentUser.email} </h3>
        <ListingsContainer />
        <Link to="/listings/new">Create A Listing</Link>
        <button className="SessionButton" onClick={props.logout}>
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div className="LoginSignUpLinks">
        <Link to="/login" className="Links">
          Login
        </Link>
        <Link to="/signup" className="Links">
          Register
        </Link>
      </div>
    );
  }
};

export default Greeting;
