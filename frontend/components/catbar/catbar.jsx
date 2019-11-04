import React from "react";
import { Link } from "react-router-dom";

const Catbar = () => {
    return (
        <div >
            <ul className="Catbar">
                <li className="CatbarItems">
                    {" "}
                    <Link to="/about">
                        <div className="CatbarText">About Us</div>{" "}
                    </Link>{" "}
                </li>
                <li className="CatbarItems">
                    {" "}
                    <Link to="/dresses">
                        <div className="CatbarText">Dresses</div>
                    </Link>
                </li>
                <li className="CatbarItems">
                    {" "}
                    <Link to="/accessories">
                        <div className="CatbarText">Accessories</div>
                    </Link>
                </li>
                <li className="CatbarItems">
                    {" "}
                    <a href="https://www.etsy.com/shop/BloomsNBugs/reviews">
                        <div className="CatbarText">Reviews</div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Catbar;
