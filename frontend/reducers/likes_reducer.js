import {
  RECEIVE_ALL_LIKES,
  RECEIVE_LIKE,
  DELETE_LIKE
} from "../actions/like_actions";
import merge from "lodash/merge";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_LIKES: {
      newState = Object.assign({}, action.likes);
      return newState;
    }
    case RECEIVE_LIKE: {
      newState = merge({}, state, { [action.like.id]: action.like });
      return newState;
    }
    case DELETE_LIKE: {
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    }
    default:
      return state;
  }
};

export default likesReducer;
