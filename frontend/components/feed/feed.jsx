import React from 'react';
import { Link } from 'react-router';
import SnackIndexItem from '../snacks/snacks_index_item';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSnacks();
  }

  render() {
    const snacks = this.props.snacks;
    if (snacks) {
      return (
        <div className='snack-index'>
          <div className='snack-index-container'>
            {snacks.map(snack => <SnackIndexItem key={snack.id} snack={snack} />)}
          </div>
        </div>
      );
    }
  }
}

export default Feed;
