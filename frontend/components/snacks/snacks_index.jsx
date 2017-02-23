import React from 'react';
import SnackIndexItem from './snacks_index_item';

class SnacksIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUserSnacks(parseInt(this.props.id));
  }

  componentWillReceiveProps(newProps) {
    if(this.props.id !== newProps.id) {
      newProps.requestUserSnacks(parseInt(newProps.id));
    }
  }

  componentWillUnmount(){
    this.props.removeSnacks();
  }

  render() {
    const snacks = this.props.snacks;
    if (snacks[0]) {
      return (

          <div className="snack-index-container">
            <div className="snack-index-user">
              <div className="snack-index-user-text">
                <h1>{snacks[0].user_name}'s Snacks</h1>
              </div>
            </div>
            {snacks.map(snack => <SnackIndexItem key={snack.id} snack={snack} />)}
          </div>

      );
    } else {
      return <div></div>;
    }
  }
}

export default SnacksIndex;
