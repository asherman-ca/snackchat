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
    default:
      return state;
  }
};

export default SessionReducer;
