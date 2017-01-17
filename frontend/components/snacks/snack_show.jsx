import React from 'react';
import { Link } from 'react-router';

class SnackShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchSnack({
  //     id: this.props.params.snackId
  //   });
  // }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteSnack(this.props.params.snackId).then(
      () => this.props.router.replace('/profile'));
    // this.props.fetchRatings({
    //   type: "drink",
    //   id: this.props.params.drinkId,
    //   amount: 15
    // });
  }

  render () {
    const snack = this.props.snack;
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
                <p>{ snack.name }</p><p className="credit">from Super Duper Burger</p>
              </div>
              <div onClick = {this.handleDelete} className="show-index-button">
                <p >Delete</p>
              </div>
            </div>
            <div className="show-index-item">
              <div className="show-index-rating-button">
                <p >Rate Me!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SnackShow;
