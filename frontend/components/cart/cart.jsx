import React from "react";
import { connect } from "react-redux";
import { getCart } from "../../actions/cart_actions";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCart();
  }
  render() {
    let newArr = this.props.cart.map((item, idx) => (
      <li key={idx}>
        {item.title}, {item.price}
      </li>
    ));
    return <ul>{newArr}</ul>;
  }
}

const msp = ({ entities }) => {
  return {
    cart: entities.cart
  };
};

const mdp = dispatch => {
  return { getCart: () => dispatch(getCart()) };
};
export default connect(
  msp,
  mdp
)(Cart);
