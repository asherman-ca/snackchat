import * as APIUtil from '../util/snack_api_util';
import { receiveErrors, clearErrors } from './error_actions.js';

export const RECEIVE_SNACK = "RECEIVE_SNACK";
// export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
// export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const addSnack = snack => dispatch => (
  APIUtil.addSnack(snack).then(
    snack => {
      dispatch(clearErrors());
      return dispatch(receiveSnack(snack));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

// export const clearErrors = () => dispatch => (
//   dispatch(removeErrors())
// );

export const receiveSnack = snack => ({
  type: RECEIVE_SNACK,
  snack
});

// export const receiveErrors = errors => ({
//   type: RECEIVE_ERRORS,
//   errors
// });
//
// export const removeErrors = () => ({
//   type: CLEAR_ERRORS,
// });
