import React from 'react';
import { withRouter } from 'react-router';
import SnacksIndexContainer from '../snacks/snacks_index_container';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='profile'>
        <div className='profile-content'>
            <h1 className='profile-title'>{this.props.username}</h1>
            <SnacksIndexContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
