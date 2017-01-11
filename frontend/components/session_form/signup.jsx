import React from 'react';
import { Link } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.signupUser = this.signupUser.bind(this);
  }

  signupUser(e) {
    e.preventDefault();
    this.props.signup(this.state);
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
      <div>
        <form onSubmit={this.signupUser} className='form'>

          <label htmlFor='username' className='form-label'>
            { "Username" }
          </label>

          <input name='username'
                 value={ this.state.username }
                 onChange={ this.update('username') }
                 className='form-input'></input>

          <label htmlFor='password' className='form-label'>
            { "Password" }
          </label>

          <input type='password'
                 name='password'
                 onChange={ this.update('password')}
                 className='form-input'></input>

               <div className="form-aligner">
          <input type='submit'
                 className='form-button'
                 value='Signup'></input>

          <span className='form-span'>
            {"Have an account?"} <Link to='/login'>Login</Link>
          </span>
          </div>
        </form>
      </div>

    );
  }
}

export default SignupForm;
