import React from 'react';
import RatingIndexItem from './ratings_index_item';

class RatingsIndex extends React.Component {

  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  componentDidMount() {
    this.props.requestRatings();
  }

  render() {
    const ratings = this.props.ratings;
    console.log(ratings);
    if (ratings) {
      return (
        <div className="rating-index">
          <div className="rating-index-container">
            {ratings.map(rating => <RatingIndexItem key={rating.id} rating={rating} />)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default RatingsIndex;
