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

  componentWillReceiveProps(newProps) {
    if(!newProps.loggedIn){
      this.props.router.replace('/');
    }
  }

  showNavLink(){
    const user = this.props.user;
    if (user) {
      return <Link className='nav-link' to={`/profile/${user.id}`}>{user.username}</Link>;
    }
  }

  render(){

    return (
      <div className='browse-sidebars'>
        <div className='browse-content'>
          <div className='navbar'>
            <div className='navbar-profile'>
              {this.showNavLink()} <p>Snacks</p>
            <Link className='nav-link add-snack' to='/add'>Add</Link><p>Snack</p>
            </div>
            <div className='navbar-header'>
              <h1><Link to='/feed'>SnackChat</Link></h1><p>share your snacks</p>
            </div>
            <div className='navbar-functions'>

              <div className='nav-action'>
                <Link to='/feed'>
                  <span>Snacks</span>
                </Link>
              </div>
              <div className='nav-action log-action'>
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
