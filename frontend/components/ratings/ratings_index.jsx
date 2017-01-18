import React from 'react';
// import RatingIndexItem from './snacks_index_item';

class RatingsIndex extends React.Component {

  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  componentDidMount() {
    this.props.requestRatings();
  }

  render() {
    const ratings = this.props.snacks;
    if (ratings) {
      return (
        <div className="snack-index">
          <div className="snack-index-container">
            // {ratings.map(rating => <RatingIndexItem key={rating.id} rating={rating} />)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default RatingsIndex;
