export const GET_CART = "GET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const fetchCart = () => {
  return {
    type: GET_CART
  };
};

export const addListingToCart = listing => {
  return {
    type: ADD_TO_CART,
    listing
  };
};

export const removeListingFromCart = idx => {
  return {
    type: REMOVE_FROM_CART,
    idx
  };
};

export const getCart = () => dispatch => dispatch(fetchCart());
export const addToCart = listing => dispatch(addListingToCart(listing));
export const removeFromCart = idx => removeListingFromCart(idx);
