import React from 'react';
import { withRouter, Link } from 'react-router';

const Splash = ({ children }) => (
  <div>
    <div className='navbar'>
      <div className='navbar-logo'>
        <Link to='/'><img src="http://res.cloudinary.com/devwor0u0/image/upload/v1484177115/Logomakr_9HsNws_wvu8r8.png"/></Link>
      </div>

      <div className='navbar-header'>
        <h1><Link to='/'>SnackChat</Link></h1><p>share your snacks!</p>
      </div>

      <div className='navbar-buttons'>
        <div className='navbar-button btn-login'>
          <Link to='/login'>
            <span>Login</span>
          </Link>
        </div>
        <div className='navbar-button btn-signup'>
          <Link to='/signup'>
            <span>Signup</span>
          </Link>
        </div>
        <div className='navbar-button btn-demo'>
          <Link to='/demo'>
            <span>Demo</span>
          </Link>
        </div>
      </div>
    </div>

    <div className='splash'>
      { children }
    </div>
  </div>
);

export default withRouter(Splash);
