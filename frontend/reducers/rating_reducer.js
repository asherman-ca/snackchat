import {
  RECEIVE_RATINGS, RECEIVE_RATING, REMOVE_RATINGS
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
    case REMOVE_RATINGS:
      let newestState = {};
      return newestState;
    default:
      return state;
  }
};

export default RatingReducer;
