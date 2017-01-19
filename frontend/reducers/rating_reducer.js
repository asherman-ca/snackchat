import {
  RECEIVE_RATINGS, RECEIVE_RATING
} from '../actions/rating_actions';
import {merge} from 'lodash';

const RatingReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RATINGS:
      let newState = merge({}, action.ratings);
      return newState;
    case RECEIVE_RATING:
      let newerState = merge({}, state, {[action.rating.id]:action.rating});
      return newerState;
    default:
      return state;
  }
};

export default RatingReducer;
