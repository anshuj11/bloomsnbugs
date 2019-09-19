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
        <li className="SidebarItems">
          {" "}
          <Link to="/dresses">Dresses</Link>
        </li>
        <li className="SidebarItems">
          {" "}
          <Link to="/accessories">Accessories</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
