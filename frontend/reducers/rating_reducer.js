import {
  RECEIVE_RATINGS
} from '../actions/rating_actions';
import {merge} from 'lodash';

const RatingReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RATINGS:
      let newState = merge({}, action.ratings);
      return newState;
    default:
      return state;
  }
};

export default RatingReducer;
