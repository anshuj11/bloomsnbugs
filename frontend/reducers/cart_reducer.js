import {
  ADD_TO_CART,
  GET_CART,
  REMOVE_FROM_CART
} from "../actions/cart_actions";

const cartReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [];
  switch (action.type) {
    case GET_CART:
      return state;
    case ADD_TO_CART: {
      state.forEach(listing => newState.push(listing));
      newState.push(action.listing);
      return newState;
    }
    case REMOVE_FROM_CART: {
      newState = state.filter((listing, idx) => idx != action.idx);
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
