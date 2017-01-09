import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//window testing
import { signup, logout } from './util/session_api_util.js';
import { login } from './actions/session_actions.js';
window.login = login;
window.signup = signup;
window.logout = logout;
// window.store = configureStore();
//end window testing

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
