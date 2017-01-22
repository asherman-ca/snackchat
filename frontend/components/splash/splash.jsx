import React from 'react';
import { withRouter, Link } from 'react-router';

const demoUser = {
  username: 'Guest',
  password: 'password'
};

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._redirectLoggedIn();
  }

  componentDidUpdate() {
    this._redirectLoggedIn();
  }

  _redirectLoggedIn() {
    if(this.props.loggedIn) {
      let url = `/profile/${this.props.user.id}`;
      this.props.router.replace("/ratings/");
    }
  }

  render() {
    return (
      <div className='splash-sidebars'>

          <div className='navbar'>
            <div className='navbar-logo'>
              <img src="http://res.cloudinary.com/devwor0u0/image/upload/v1484180645/SnackChat_hwfh0w.png"/>
            </div>

            <div className='navbar-header'>
              <h1><Link to='/'>SnackChat</Link></h1><p>share your snacks</p>
            </div>

            <div className='navbar-functions'>
              <div className='nav-action'>
                <Link to='/signup'>
                  <span>Signup</span>
                </Link>
              </div>
              <div className='nav-action log-action'>
                <a onClick={ () => this.props.login(demoUser) }>
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>

          <div className='splash'>
            { this.props.children }
          </div>
      </div>
    );
  }
}

export default withRouter(Splash);
