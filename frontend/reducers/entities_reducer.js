import { combineReducers } from "redux";
import listingsReducer from "./ listings_reducer";
import sessionReducer from "./session_reducer";
const entitiesReducer = combineReducers({
  sessionReducer,
  listingsReducer
});

export default entitiesReducer;
