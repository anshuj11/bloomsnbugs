import React from "react";

class Listings extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllListings();
  }
  render() {
    const listings_arr = Object.keys(this.props.listings).map(id => (
      <li key={id} className="Listing">{this.props.listings[id].title}</li>
    ));
    return (
      <div>
            <ul className="ListingsGrid">
                
          {listings_arr}
        </ul>
      </div>
    );
  }
}

export default Listings;
