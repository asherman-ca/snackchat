import {
  RECEIVE_SNACK,
  RECEIVE_SNACKS,
  REMOVE_SNACK,
  REMOVE_SNACKS
} from '../actions/snack_actions';
import {merge} from 'lodash';

const SnackReducer = ( state = {} , action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SNACK:
      let newState = merge({}, state, {[action.snack.id]:action.snack});
      return newState;
    case RECEIVE_SNACKS:
      return merge({}, action.snacks);
    case REMOVE_SNACKS:
      let newestState = {};
      return newestState;
    case REMOVE_SNACK:
      let newerState = merge({}, state);
      delete newerState[action.id];
      return newerState;
    default:
      return state;
  }
};

export default SnackReducer;
