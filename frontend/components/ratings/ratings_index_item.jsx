import React from 'react';
import { withRouter } from 'react-router';

class RatingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSnackClick = this.handleSnackClick.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
  }

  handleUserClick() {
    const userId = this.props.rating.user_id;
    this.props.router.push(`profile/${userId}`);
  }

  handleSnackClick() {
    const snackId = this.props.rating.snack_id;
    this.props.router.push(`snacks/${snackId}`);
  }

  render() {
    const { rating, snack_url, snack_name, user_name, snack_desc } = this.props.rating;
    return (
      <div className="rating-index-item">
        <div className="rating-index-image">
          <img src={ snack_url } />
        </div>
        <div className="rating-index-title">
          <p onClick = {this.handleSnackClick}>{ snack_name }</p><p className="credit">{ snack_desc }</p>
        </div>
        <div className="rating-index-rating">
          <p className="rater-credit">Recieved:</p><p>{ rating } stars</p>
        </div>
        <div className="rating-index-rater">
          <p className="rater-credit">From:</p><p onClick = {this.handleUserClick}>{ user_name }</p>
        </div>
      </div>
    );
  }
}

export default withRouter(RatingIndexItem);
