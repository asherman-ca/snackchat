import React from 'react';
import { withRouter, Link } from 'react-router';
import Header from '../header/header_container';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.createNavbarTitle = this.createNavbarTitle.bind(this);
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
    // console.log(this.props);
  }

  createNavbarTitle() {
    let path = this.props.router.location.pathname;
    let navTitle;
    if (path.includes('profile')) {
      navTitle = `${this.props.user.username}'s Snacks`;
    } else if (path.includes('add')) {
      navTitle = 'Add a Snack';
    } else if (path.includes('ratings')) {
      navTitle = 'Recent Ratings';
    } else if (path.includes('feed')) {
      navTitle = 'Local Snacks';
    }

    return navTitle;
  }

  render() {
    return (
      <div className='browse-sidebars'>
          <Header navTitle={ this.createNavbarTitle() }/>
          <div className='browse'>
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default withRouter(App);
