import React from 'react';
import { Link } from 'react-router';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='feed'>
        <div className='feed-content'>
          <div className='feed-title'>
            <h1>Recent Activity</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
