import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/error_actions';

import {merge} from 'lodash';

const ErrorReducer = ( state = [] , action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge([], state, action.errors);
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorReducer;
