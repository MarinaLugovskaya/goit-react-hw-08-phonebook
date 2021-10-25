import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import authOperations from '../../redux/auth/auth-operations'

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.logIn({email, password}));
    setEmail('');
    setPassword('');
  };


  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
          placeholder="email"
        />
        </label>


        <label>
          Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          required
          placeholder="password"
        />
        </label>

        <button type="submit">
        sign in
        </button>
      </form>
    </>
  );
}

export default LoginView;