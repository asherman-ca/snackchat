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
    this.props.deleteDrink(this.props.params.drinkId);
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
                <p>{ snack.name }</p>
              </div>
              <div className="show-index-button">
                <p onClick = {this.handleClick}>Delete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SnackShow;