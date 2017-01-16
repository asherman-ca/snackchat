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

    this.snackAdd = this.snackAdd.bind(this);
  }

  snackAdd(e) {
    e.preventDefault();
    this.props.addSnack(this.state).then(
      () => this.props.router.replace('/profile'));
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
      <div>
        { this.renderErrors() }
        <form onSubmit={this.snackAdd} className='snackform'>

          <label htmlFor='name' className='snackform-label'>
            { "Name" }
          </label>

          <input name='name'
                 value={ this.state.name }
                 onChange={ this.update('name') }
                 className='snackform-input'></input>

         <label htmlFor='picture_url' className='snackform-label'>
           { "Picture URL" }
         </label>

         <input name='picture_url'
                value={ this.state.picture_url }
                onChange={ this.update('picture_url') }
                className='snackform-input'></input>

        <label htmlFor='description' className='snackform-label'>
            { "Description" }
        </label>

        <input name='description'
               value={ this.state.description }
               onChange={ this.update('description') }
               className='snackform-input'></input>

       <input type='submit'
              className='snackform-button'
              value='Share'></input>

        </form>
      </div>
    );
  }
}

export default withRouter(SnackForm);
