import {
  RECEIVE_CURRENT_USER,
  LOGOUT } from '../actions/session_actions';

import {merge} from 'lodash';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, _nullUser, { currentUser: action.currentUser });
    case LOGOUT:
      return merge({}, _nullUser);
    // case RECEIVE_ERRORS:
    //   const errors = action.errors;
    //   return merge({}, _nullUser, {
    //     errors
    //   });
    // case CLEAR_ERRORS:
    //   return merge({}, _nullUser, {errors: []});
    default:
      return state;
  }
};

export default SessionReducer;
