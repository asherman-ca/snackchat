import * as APIUtil from '../util/snack_api_util';
import { receiveErrors, clearErrors } from './error_actions.js';

export const RECEIVE_SNACK = "RECEIVE_SNACK";
export const RECEIVE_SNACKS = "RECEIVE_SNACKS";


export const addSnack = snack => dispatch => (
  APIUtil.addSnack(snack).then(
    res => {
      dispatch(clearErrors());
      return dispatch(receiveSnack(res));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const requestSnacks = () => dispatch => (
  APIUtil.fetchSnacks().then(
    snacks => {
      dispatch(clearErrors());
      return dispatch(receiveSnacks(snacks));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);


export const receiveSnack = snack => ({
  type: RECEIVE_SNACK,
  snack
});

export const receiveSnacks = snacks => ({
  type: RECEIVE_SNACKS,
  snacks
});
