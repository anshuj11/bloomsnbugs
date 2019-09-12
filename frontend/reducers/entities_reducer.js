import { combineReducers } from "redux";
import listingsReducer from "./ listings_reducer";
import usersReducer from "./users_reducer";
import cartReducer from "./cart_reducer";

const entitiesReducer = combineReducers({
  cart: cartReducer,
  listings: listingsReducer,
  users: usersReducer
});

export default entitiesReducer;
