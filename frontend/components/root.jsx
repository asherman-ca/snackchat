import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './app/app_container';
import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session_form/session_form_container';
import FeedContainer from './feed/feed_container';
import { clearErrors, removeErrors } from '../actions/session_actions';

const Root = ({ store }) => {

  const _redirect = (nextState, replace) => {
    if(store.getState().session.currentUser) {
      replace('/browse');
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

        <Route path="/splash" component={ SplashContainer }>
          <Route path="/login" component={ SessionFormContainer} onEnter={ _clearErrs } />
          <Route path="/signup" component={ SessionFormContainer} onEnter={ _clearErrs } />
        </Route>

        <Route path="/browse" component={ AppContainer }>
          <IndexRoute component={ FeedContainer }/>
          <Route path='/feed' component={ FeedContainer } />
        </Route>

      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
