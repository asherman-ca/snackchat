import * as APIUtil from '../util/snack_api_util';
import { receiveErrors, clearErrors } from './error_actions.js';

export const RECEIVE_SNACK = "RECEIVE_SNACK";


export const addSnack = snack => dispatch => (
  APIUtil.addSnack(snack).then(
    res => {
      dispatch(clearErrors());
      return dispatch(receiveSnack(res));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const receiveSnack = snack => ({
  type: RECEIVE_SNACK,
  snack
});
