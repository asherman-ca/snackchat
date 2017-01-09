import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//window testing
import { login, signup, logout } from './util/session_api_util.js';
window.login = login;
window.signup = signup;
window.logout = logout;
window.store = configureStore();
//end window testing

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});


// document.addEventListener('DOMContentLoaded', () => {
//     const root = document.getElementById('root');
//     ReactDOM.render(<h1>Welcome to SnackChat</h1>, root);
// });
