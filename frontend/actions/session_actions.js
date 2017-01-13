import * as APIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './error_actions.js';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const signup = user => dispatch => (
  APIUtil.signup(user).then(
    user => {
      dispatch(clearErrors());
      return dispatch(receiveCurrentUser(user));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const login = user => dispatch => (
  APIUtil.login(user).then(
    user => {
      dispatch(clearErrors());
      return dispatch(receiveCurrentUser(user));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const logout = () => dispatch => (
  APIUtil.logout().then(
    user => {
      dispatch(clearErrors());
      return dispatch(receiveCurrentUser(null));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
