import React from 'react';
import { Link } from 'react-router';
import FeedIndexItem from '../feed/feed_index_item';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSnacks();
  }

  componentWillUnmount(){
    this.props.removeSnacks();
  }

  render() {
    const snacks = this.props.snacks;
    if (snacks) {
      return (

          <div className='feed-index-container'>
            <div className='feed-index-top'>
              <div className='feed-index-top-text'>
                <h1>Local Snacks</h1>
              </div>
            </div>
            {snacks.map(snack => <FeedIndexItem key={snack.id} snack={snack} />)}
          </div>

      );
    }
  }
}

export default Feed;
