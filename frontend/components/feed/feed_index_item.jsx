import React from 'react';
import { withRouter } from 'react-router';
const Rating = require('react-rating');

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const snackId = this.props.snack.id;
    this.props.router.push(`snacks/${snackId}`);
  }

  render() {
    const { name, picture_url, description, user_name, average_rating } = this.props.snack;

    return (
      <div className="feed-index-item" onClick = {this.handleClick}>
        <div className="feed-index-image">
          <img src={ picture_url } />
        </div>
        <div className="feed-index-title">
          <p>{ name }</p><p>{ description }</p>
        </div>
        <div className="feed-index-sharer">
          <p>Shared by:</p><p>{ user_name }</p>
        </div>
        <div className="feed-index-avgrating">
          <p>Average Rating:</p>
          <Rating initialRate={ average_rating } readonly={true}
                  empty="fa fa-star grey fa-lg" full="fa fa-star gold fa-lg"/>
        </div>
      </div>
    );
  }
}

export default withRouter(FeedIndexItem);
