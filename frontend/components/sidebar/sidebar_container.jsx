import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        <li className="SidebarItems">
          {" "}
          <Link to="/about">About Us </Link>{" "}
        </li>
        <li className="SidebarItems">Dresses</li>
        <li className="SidebarItems">Hair Accessories</li>
      </ul>
    </div>
  );
};

export default Sidebar;
