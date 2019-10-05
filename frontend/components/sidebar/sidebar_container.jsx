import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        <li className="SidebarItems">
          {" "}
          <Link to="/about">
            <div className="SidebarText">About Us</div>{" "}
          </Link>{" "}
        </li>
        <li className="SidebarItems">
          {" "}
          <Link to="/dresses">
            <div className="SidebarText">Dresses</div>
          </Link>
        </li>
        <li className="SidebarItems">
          {" "}
          <Link to="/accessories">
            <div className="SidebarText">Accessories</div>
          </Link>
        </li>
        <li className="SidebarItems">
          {" "}
          <a href="https://www.etsy.com/shop/BloomsNBugs\?#reviews">
            <div className="SidebarText">Reviews</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
