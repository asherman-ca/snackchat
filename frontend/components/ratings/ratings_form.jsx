import React from 'react';
import { withRouter } from 'react-router';

class RatingsForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.snack);
  }

  render() {
      return (
        <div>
          <div className="show-index-item">
            <h1>test</h1>
          </div>
        </div>
      );
  }
}

export default withRouter(RatingsForm);
