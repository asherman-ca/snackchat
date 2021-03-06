import React from 'react';
import { Link, withRouter } from 'react-router';
import SnackRatingsItem from '../ratings/snack_ratings_item';
import RatingsForm from '../ratings/ratings_form';
const Rating = require('react-rating');

class SnackShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
  }

  componentDidMount() {
    // this.props.fetchSnack(
    //   this.props.params.snackId
    // );
    this.props.requestSnacks();
    this.props.requestSnackRatings(
      this.props.params.snackId
    );
  }

  componentWillReceiveProps(newProps) {
    if(this.props.ratings.length !== newProps.ratings.length) {
      newProps.requestSnackRatings(
        this.props.params.snackId
      );
    }
  }

  // runs right before you're about to switch a page
  componentWillUnmount(){
    this.props.removeRatings();
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteSnack(this.props.params.snackId).then(
      () => this.props.router.replace('/feed/'));
  }

  handleUserClick() {
    const userId = this.props.snack.user_id;
    this.props.router.push(`profile/${userId}`);
  }

  render () {
    const snack = this.props.snack;
    const ratings = this.props.ratings;
    const addRating = this.props.addRating;
    if (!snack) {
      return <div>Loading...</div>;
    }
    return (
          <div className="show-index-container">
            <div className="show-index-title-item">
              <div className="show-index-image">
                <img src={ snack.picture_url } />
              </div>
              <div className="show-index-title">
                <p>{ snack.name }</p><p>{ snack.description }</p>
              </div>
              <RatingsForm snack={snack} addRating={ addRating } />
                <div className="show-index-sharer">
                  <div className="show-index-user-button" onClick = {this.handleUserClick}>
                    <p>{ snack.user_name }</p>
                  </div>
                </div>
              <div className="show-index-button">
                <div className="show-index-user-button" onClick = {this.handleDelete}>
                  <p>Delete</p>
                </div>
              </div>
            </div>
            <div className="show-index-avgrating-item">
              <div className="show-index-avgrating-text">

                <p>Average Rating:</p>
                <Rating initialRate={ snack.average_rating } readonly={true}
                        empty="fa fa-star grey fa-lg" full="fa fa-star gold fa-lg"/>
                
              </div>
            </div>
            <div className="show-ratings-index">
              {ratings.map(rating => <SnackRatingsItem key={Math.random()} rating={rating} />)}
            </div>
          </div>
    );
  }
}

export default withRouter(SnackShow);

// <div className="show-index-item">
//   <div className="show-index-rating-button">
//     <p >Rate Me!</p>
//   </div>
// </div>
