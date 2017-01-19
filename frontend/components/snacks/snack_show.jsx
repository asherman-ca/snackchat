import React from 'react';
import { Link } from 'react-router';
import SnackRatingsItem from '../ratings/snack_ratings_item';
import RatingsForm from '../ratings/ratings_form';

class SnackShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchSnack(
      this.props.params.snackId
    );
    this.props.requestSnackRatings(
      this.props.params.snackId
    );
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteSnack(this.props.params.snackId).then(
      () => this.props.router.replace('/feed/'));
  }

  render () {
    const snack = this.props.snack;
    const ratings = this.props.ratings;
    if (!snack) {
      return <div>Loading...</div>;
    }
    return (
      <div className="show">
        <div className="show-content">
          <div className="show-index-container">
            <div className="show-index-item">
              <div className="show-index-image">
                <img src={ snack.picture_url } />
              </div>
              <div className="show-index-title">
                <p>{ snack.name }</p><p className="credit">{ snack.description }</p>
              </div>
              <div onClick = {this.handleDelete} className="show-index-button">
                <p >Delete</p>
              </div>
            </div>
            <RatingsForm snack={snack} />
            <div className="show-ratings-index">
              {ratings.map(rating => <SnackRatingsItem key={rating.id} rating={rating} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SnackShow;

// <div className="show-index-item">
//   <div className="show-index-rating-button">
//     <p >Rate Me!</p>
//   </div>
// </div>
