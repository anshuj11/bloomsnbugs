import React from "react";
import { connect } from "react-redux";
import { getCart, removeFromCart } from "../../actions/cart_actions";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getCart();
  }
  handleClick(e, idx) {
    e.preventDefault();
    debugger;
    console.log("Props: ", this.props);
    this.props.removeFromCart(idx);
  }
  render() {
    let total = 0;
    this.props.cart.forEach(item => (total += item.price));
    let newArr = this.props.cart.map((item, idx) => (
      <li key={idx} className="ItemInCart">
        <div className="Item">
          <div className="ItemTitle">{item.title} </div>
          <div className="ItemPrice">${item.price} </div>
          <button onClick={e => this.handleClick(e, idx)}>Remove</button>
        </div>
      </li>
    ));
    return (
      <div className="Bill">
        <ul className="ItemsList">{newArr}</ul>
        <hr></hr>
        <div className="CartTotal"> Total: ${total}</div>
        <button className="DisabledButton">Buy</button>
      </div>
    );
  }
}

const msp = ({ entities }) => {
  return {
    cart: entities.cart
  };
};

const mdp = dispatch => {
  return {
    getCart: () => dispatch(getCart()),
    removeFromCart: idx => dispatch(removeFromCart(idx))
  };
};
export default connect(
  msp,
  mdp
)(Cart);
