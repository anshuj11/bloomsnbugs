export const RECEIVE_USER = "RECEIVE_USER"; //login
export const LOGOUT_USER = "LOGOUT_USER"; //logout
export const CREATE_USER = "CREATE_USER"; //signup
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"; //error messages

import * as SessionAPIUtil from "../util/session_api_util";

const receiveUser = user => {
  return {
    type: RECEIVE_USER, //login
    user
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT_USER //logout
  };
};

const createUser = user => {
  return {
    type: CREATE_USER, //signup
    user
  };
};

const receiveErrors = errors => {
  debugger;
  return {
    type: RECEIVE_SESSION_ERRORS, //login
    errors
  };
};

export const signup = formUser => dispatch => {
  return SessionAPIUtil.signup(formUser).then(
    user => dispatch(createUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const login = formUser => dispatch => {
  return SessionAPIUtil.login(formUser).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(() => dispatch(logoutUser()));
};
