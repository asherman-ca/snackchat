import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util.js';
import configureStore from './store/store';

window.login = login;
window.signup = signup;
window.logout = logout;
window.store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to SnackChat</h1>, root);
});
