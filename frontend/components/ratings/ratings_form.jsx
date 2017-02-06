import React from 'react';
import { withRouter } from 'react-router';

class RatingsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: '',
      snack_id: this.props.snack.id
    };

    this.addRating = this.addRating.bind(this);
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

  render() {
      return (
          <div className="show-rating-form">
            <form onSubmit={this.addRating} className='ratingform'>


              <div className='form-sub'>
                <p>Rate:</p>
                <input name='rating'
                       value={ this.state.rating }
                       onChange={ this.update('rating') }
                       className='ratingform-input'>
                       </input>

               <input type='submit'
                      className='ratingform-button'
                      value='Stars'></input>
              </div>
            </form>
          </div>

      );
  }
}

export default withRouter(RatingsForm);


// <label htmlFor='rating'>
//   { "Rate:" }
// </label>
