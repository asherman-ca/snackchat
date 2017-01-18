import * as APIUtil from '../util/rating_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_RATINGS = "RECEIVE_RATINGS";

export const requestRatings = () => dispatch => (
  APIUtil.fetchRatings().then(
    ratings => {
      dispatch(clearErrors());
      return dispatch(receiveRatings(ratings));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const requestSnackRatings = (id) => dispatch => (
  APIUtil.fetchSnackRatings(id).then(
    ratings => {
      dispatch(clearErrors());
      return dispatch(receiveRatings(ratings));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const receiveRatings = ratings => ({
  type: RECEIVE_RATINGS,
  ratings
});
