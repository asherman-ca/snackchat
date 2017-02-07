import React from 'react';
import { withRouter } from 'react-router';
const Rating = require('react-rating');

class RatingsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: '0',
      snack_id: this.props.snack.id
    };

    this.addRating = this.addRating.bind(this);
    this.updateRating = this.updateRating.bind(this);
    // console.log(this.props.snack);
    // console.log(this.state);
  }

  addRating(e) {
    e.preventDefault();
    this.props.addRating(this.state);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  updateRating(rating){
    this.state.rating = rating;
  }


  render() {
      return (
          <div className="show-rating-form">
            <form onSubmit={this.addRating} className='ratingform'>

            <Rating empty="fa fa-star grey fa-lg" full="fa fa-star gold fa-lg"
                    onClick={this.updateRating}/>

            <input type='submit'
                  className='ratingform-button'
                  value='Rate'></input>
            </form>
          </div>

      );
  }
}

export default withRouter(RatingsForm);


// <label htmlFor='rating'>
//   { "Rate:" }
// </label>


// <p>Rate:</p>
// <input name='rating'
//        value={ this.state.rating }
//        onChange={ this.update('rating') }
//        className='ratingform-input'>
//        </input>
//
