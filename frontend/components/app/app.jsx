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
    if (Object.keys(this.props.snacks)[0]) {
      // console.log(this.props.snacks[Object.keys(this.props.snacks)[0]].user_name);
      console.log(this.props.snacks[Object.keys(this.props.snacks)[0]].user_name);
      navTitle = this.props.snacks[Object.keys(this.props.snacks)[0]].user_name;
    }
    // console.log(this.props);
    // console.log(this.props);
    if (path.includes('profile')) {
      // navTitle = `${this.props.user.username}'s Snacks`;
      // navTitle = `${this.props.snacks[Object.keys(this.props.snacks)[0]].user_name}`;
      // navTitle = 'User Snacks';
    } else if (path.includes('add')) {
      navTitle = 'Add Snack';
    } else if (path.includes('ratings')) {
      navTitle = 'Recent Ratings';
    } else if (path.includes('feed')) {
      navTitle = 'Local Snacks';
    } else if (path.includes('snacks')) {
      navTitle = 'SnackChat';
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
