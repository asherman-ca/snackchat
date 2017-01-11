import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
// import SessionFormContainer from './session_form/session_form_container.js';
import App from './app';
import Splash from './main/splash';
import SplashDisplay from './main/display';
import SessionFormContainer from './session_form/session_form_container';



const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _redirect = (nextState, replace) => {
    if(store.getState().session.currentUser) {
      replace('/browse');
    } else {
      replace('/splash');
    }
  };

  return (
  <Provider store={ store }>
    <Router history={ hashHistory }>

      <Route path="/">
        <IndexRoute onEnter={ _redirect } />

        <Route path="/splash" component={ Splash }>
          <Route path="/login" component={ SessionFormContainer} />
          <Route path="/signup" component={ SessionFormContainer} />
        </Route>

        <Route path="/browse" component={App}>

        </Route>
      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
