import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInwithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            value={email}
            type='email'
            label='Email'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='password'
            value={password}
            type='password'
            label='Password'
            handleChange={this.handleChange}
            required
          />

          <CustomButton type='submit'> Sign In </CustomButton>
          <CustomButton onClick={signInwithGoogle}>
            {' '}
            Sign in with Google{' '}
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
