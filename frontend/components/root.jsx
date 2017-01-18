import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './app/app_container';
import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session_form/session_form_container';
import FeedContainer from './feed/feed_container';
import SnackFormContainer from './snacks/snack_form_container';
import ProfileContainer from './profile/profile_container';
import SnackShowContainer from './snacks/snack_show_container';
import SnacksIndexContainer from './snacks/snacks_index_container';
import RatingsIndexContainer from './ratings/ratings_index_container';
// import SnackContainer from './snacks/snack_container';
  // <Route path='/snacks/:id' component={ SnackContainer } />
import { clearErrors, removeErrors } from '../actions/error_actions';

const Root = ({ store }) => {

  const _redirect = (nextState, replace) => {
    if(store.getState().session.currentUser) {
      replace('/ratings');
    } else {
      replace('/login');
    }
  };

  const _clearErrs = () => {
    store.dispatch(removeErrors());
  };

  return (
  <Provider store={ store }>
    <Router history={ hashHistory }>

      <Route path="/">
        <IndexRoute onEnter={ _redirect } />

        <Route component={ SplashContainer }>
          <Route path="/login" component={ SessionFormContainer} onEnter={ _clearErrs } />
          <Route path="/signup" component={ SessionFormContainer} onEnter={ _clearErrs } />
        </Route>

        <Route path="/browse" component={ AppContainer }>
          <Route path='/feed' component={ FeedContainer }/>
          <Route path='/ratings' component={ RatingsIndexContainer }/>
          <Route path='/add' component={ SnackFormContainer }/>
          <Route path='/profile/:userId' component={ SnacksIndexContainer }/>
          <Route path='/snacks/:snackId' component={ SnackShowContainer }/>
        </Route>

      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
