import {
  RECEIVE_SNACK
} from '../actions/snack_actions';
import {merge} from 'lodash';

const SnackReducer = ( state = {} , action ) => {
  debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SNACK:
      let newState = merge({}, state, {[action.snack.id]:action.snack});
      debugger
      return newState
    default:
      return state;
  }
};

export default SnackReducer;
