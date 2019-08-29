import { combineReducers } from "redux";
import listingsReducer from "./ listings_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  listings: listingsReducer,
  users: usersReducer
});

export default entitiesReducer;
