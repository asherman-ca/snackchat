import React from 'react';
import { withRouter, Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  _redirectLoggedOut() {
    if(!this.props.loggedIn) {
      this.props.router.replace('/');
    }
  }

  componentDidMount() {
    this._redirectLoggedOut();
  }

  componentDidUpdate() {
    this._redirectLoggedOut();
  }

  render(){
    return (
      <div className='browse-sidebars'>
        <div className='browse-content'>
          <div className='navbar'>
            <div className='navbar-logo-container'>
            <div className='navbar-logo'>
              <Link to='/'><img src="http://res.cloudinary.com/devwor0u0/image/upload/v1484180645/SnackChat_hwfh0w.png"/></Link>
            </div>
            </div>
            <div className='navbar-header'>
              <h1><Link to='/feed'>SnackChat</Link></h1><p>share your snacks</p>
            </div>
            <div className='navbar-buttons'>
              <div className='navbar-button'>
                <Link to='/add'>
                  <span>Share</span>
                </Link>
              </div>
              <div className='navbar-button btn-hidden'>
                <Link to='/feed'>
                  <span>Snacks</span>
                </Link>
              </div>
              <div className='navbar-button'>
                <a onClick={ () => this.props.logout()}>
                  <span>Logout</span>
                </a>
              </div>
            </div>
          </div>
          <div className='browse'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
