import React from 'react';
import { withRouter, Link } from 'react-router';
import Header from '../header/header_container';

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
    console.log(this.props);
  }

  render(){
    return (
      <div className='browse-sidebars'>
          <Header />
          <div className='browse'>
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default withRouter(App);
