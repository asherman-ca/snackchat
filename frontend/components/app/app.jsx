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
      <div>
        <header>
          <a onClick={ () => this.props.logout()}>
            <span>Logout</span>
          </a>
        </header>
        <div className='browse'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(App);
