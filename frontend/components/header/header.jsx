import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  showNavLink(){
    const user = this.props.currentUser;
    if (user) {
      return <Link className='nav-link' to={`/profile/${user.id}`}>{user.username}</Link>;
    }
  }

  render(){
  return (
  <div className='navbar'>
    <div className='navbar-profile'>
      <div className='navbar-profile-button'>
        {this.showNavLink()}
      </div>
      <div className='navbar-profile-button add-snack'>
        <Link className='nav-link' to='/add'>Add</Link>
      </div>
    </div>
    <div className='navbar-header'>
      <h1>{this.props.navTitle}</h1>
    </div>
    <div className='navbar-functions'>
      <div className='nav-action'>
        <Link to='/ratings'>
          <span>Ratings</span>
        </Link>
      </div>
      <div className='nav-action'>
        <Link to='/feed'>
          <span>Snacks</span>
        </Link>
      </div>
      <div className='nav-action'>
        <a onClick={ () => this.props.logout()}>
          <span>Logout</span>
        </a>
      </div>
    </div>
  </div>
  );
  }
}

export default Header;
