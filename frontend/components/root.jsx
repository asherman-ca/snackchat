import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
// import SessionFormContainer from './session_form/session_form_container.js';
import Welcome from './welcome';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>

      <Route path="/" component={ Welcome } />
      

    </Router>
  </Provider>
);

export default Root;
