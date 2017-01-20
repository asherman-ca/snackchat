import React from 'react';
import { withRouter } from 'react-router';

class SnackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const snackId = this.props.snack.id;
    this.props.router.push(`snacks/${snackId}`);
  }

  render() {
    const { name, picture_url, description, average_rating } = this.props.snack;

    return (
      <div className="snack-index-item" onClick = {this.handleClick}>
        <div className="snack-index-image">
          <img src={ picture_url } />
        </div>
        <div className="snack-index-title">
          <p>{ name }</p><p className="snack-index-credit">{ description }</p>
        </div>
        <div className="snack-index-rating">
          <p>Average Rating: { average_rating }</p>
        </div>
      </div>
    );
  }
}

export default withRouter(SnackIndexItem);
