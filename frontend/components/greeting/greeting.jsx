import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/sidebar_container";

const Greeting = props => {
  if (props.currentUser) {
    return (
      <div>
        <div className="Navbar">
          <div className="HeaderText">
            <h1 className="Header">Blooms And Bugs </h1>
            <h2>Welcome {props.currentUser.email} </h2>
          </div>
          <div className="LoginSignUpLinks">
            <Link to="/listing/new" className="Links">
              Create A Listing
            </Link>
            <Link to="/" className="Links">
              Browse Listings
            </Link>
            <button className="SessionButton" onClick={props.logout}>
              Logout
            </button>
            <div className="Cart">
              <div className="Notification">
                {props.itemsInCart ? props.itemsInCart : 0}
              </div>
              <Link to="/cart" className="fas fa-shopping-cart"></Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    debugger;
    return (
      <div>
        <div className="Navbar">
          <div className="HeaderText">
            <h1 className="Header">Blooms And Bugs </h1>
            <h2 className="Byline">Beautiful, unique, handmade in USA </h2>
          </div>
          <div className="LoginSignUpLinks">
            <Link to="/login" className="Links">
              Login
            </Link>
            <Link to="/signup" className="Links">
              Register
            </Link>
            <button
              className="SessionButton"
              onClick={e => submitDemoUser(e, props)}
            >
              Demo
            </button>
            <div className="Cart">
              <div className="Notification">
                {props.itemsInCart ? props.itemsInCart : 0}
              </div>
              {/* <i className="fas fa-shopping-cart"></i> */}
              <Link to="/cart" className="fas fa-shopping-cart"></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const submitDemoUser = function(e, props) {
  e.preventDefault();
  const user = Object.assign(
    {},
    { email: "demouser@demo.com", password: "123456" }
  );
  props.login(user);
  props.history.push("/");
};

export default Greeting;
