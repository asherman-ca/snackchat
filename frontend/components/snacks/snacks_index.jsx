import React from 'react';
import SnackIndexItem from './snacks_index_item';

class SnacksIndex extends React.Component {

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
        <div className="snack-index-container">
          {snacks.map(snack => <SnackIndexItem key={snack.id} snack={snack} />)}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default SnacksIndex;
