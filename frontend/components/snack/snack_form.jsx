import React from 'react';
import { withRouter } from 'react-router';

class SnackForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      picture_url: '',
      description: ''
    };
  }

  snackAdd(e) {
    e.preventDefault();
    this.props.addSnack(this.state);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  renderErrors() {
    return (
      <ul className='form-errors'>
        {this.props.errors.map( (error, idx) => <li key={idx}>{error}</li> ) }
      </ul>
    );
  }

  render() {
    return (
      <div className='feed'>
        <div className='feed-content'>
          <h1>SNACK FORM</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(SnackForm);
