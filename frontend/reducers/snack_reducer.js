import {
  RECEIVE_SNACK,
  RECEIVE_SNACKS
} from '../actions/snack_actions';
import {merge} from 'lodash';

const SnackReducer = ( state = [] , action ) => {
  Object.freeze(state);
  debugger
  switch(action.type) {
    case RECEIVE_SNACK:
      return merge([], state, action.snack);
    case RECEIVE_SNACKS:
      return merge([], state, action.snacks);
    default:
      return state;
  }
};

export default SnackReducer;
