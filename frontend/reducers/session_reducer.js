import {
  RECEIVE_USER,
  CREATE_USER,
  LOGOUT_USER
} from "../actions/session_actions";
import merge from "lodash";

const _nullSession = {
  currentUser: null
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let currentUser;
  switch (action.type) {
    case RECEIVE_USER:
      currentUser = action.user;
      return Object.assign({}, { currentUser });
    case CREATE_USER:
      currentUser = action.user;
      return Object.assign({}, { currentUser });
    case LOGOUT_USER:
      return _nullSession;
    default:
      return state;
  }
};

export default sessionReducer;
