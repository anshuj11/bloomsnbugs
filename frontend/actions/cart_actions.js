export const GET_CART = "GET_CART";
export const ADD_TO_CART = "ADD_TO_CART";

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

export const getCart = () => dispatch => dispatch(fetchCart());
export const addToCart = (listing) => dispatch(addListingToCart(listing));
