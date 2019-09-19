import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/sidebar_container";

class Accessories extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getAllListings();
    }
    render() {
        //console.log("Props.Listing: ", this.props.listings);
        const things_arr = Object.keys(this.props.listings).filter(id =>
            !(this.props.listings[id].title.includes("Dress"))
        );
        console.log("Things.Arr: ", things_arr);
        const listings_arr = things_arr.map(id => (
            <li key={id} className="Listing">
                {/* {this.props.listings[id].title} */}
                <Link to={`/listings/${id}`}>
                    <img
                        src={this.props.listings[id].photoUrl}
                        className="ListingImage"
                    />
                </Link>
                <br />
                <Link to={`/listings/${id}`}>{this.props.listings[id].title}</Link>
            </li>
        ));
        console.log("Listings Array: ", listings_arr);
        return (
            <div className="MainPage">
                <Sidebar />
                <ul className="ListingsGrid">{listings_arr}</ul>
            </div>
        );
    }
}

export default Accessories;
