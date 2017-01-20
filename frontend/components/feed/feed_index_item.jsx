import React from 'react';
import { withRouter } from 'react-router';

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
    const { name, picture_url, description } = this.props.snack;

    return (
      <div className="feed-index-item" onClick = {this.handleClick}>
        <div className="feed-index-image">
          <img src={ picture_url } />
        </div>
        <div className="feed-index-title">
          <p>{ name }</p><p className="credit">{ description }</p>
        </div>
      </div>
    );
  }
}

export default withRouter(FeedIndexItem);
