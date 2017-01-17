import React from 'react';
import SnackIndexItem from './snacks_index_item';

class SnacksIndex extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    this.props.requestUserSnacks(parseInt(this.props.id));
  }

  render() {
    const snacks = this.props.snacks;
    if (snacks) {
      return (
        <div className="snack-index">
          <div className="snack-index-container">
            {snacks.map(snack => <SnackIndexItem key={snack.id} snack={snack} />)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default SnacksIndex;
