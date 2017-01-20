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
        <div className='feed-index'>
          <div className='feed-index-container'>
            {snacks.map(snack => <FeedIndexItem key={snack.id} snack={snack} />)}
          </div>
        </div>
      );
    }
  }
}

export default Feed;
