import React from 'react';
import { withRouter } from 'react-router';

class RatingsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: '',
      snack_id: this.props.snack.id
    };
    // console.log(this.props.snack);
    // console.log(this.state);
  }

  addRating(e) {
    e.preventDefault();
    this.props.addRating(this.state);
  }

  render() {
      return (
        <div className="show-index-item">
          <div className="show-rating-title">
            <span>Add Rating:</span>
          </div>
          <div className="show-rating-submit">

          </div>
        </div>
      );
  }
}

export default withRouter(RatingsForm);
