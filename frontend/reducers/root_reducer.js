import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import SnackReducer from './snack_reducer';
import RatingReducer from './rating_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  snacks: SnackReducer,
  ratings: RatingReducer
});

export default rootReducer;
