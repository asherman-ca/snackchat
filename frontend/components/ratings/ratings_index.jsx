import React from 'react';
import RatingIndexItem from './ratings_index_item';

class RatingsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestRatings();
  }

  componentWillUnmount() {
    this.props.removeRatings();
  }

  render() {
    const ratings = this.props.ratings;
    if (ratings) {
      return (
        <div className="rating-index">
          <div className="rating-index-container">
            <div className="rating-index-top">
              <h1>Recent Ratings</h1>
            </div>
            {ratings.map(rating => <RatingIndexItem key={Math.random()} rating={rating} />)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default RatingsIndex;
