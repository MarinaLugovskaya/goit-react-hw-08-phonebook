import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import css from '../RegisterView/RegisterView.module.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export const LoginView = () => {
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1 className={css.title}>Sign in</h1>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <ul className={css.formContainer}>
          <li className={css.item}>
            <TextField
              id="filled-password-input"
              label="Name"
              autoComplete="current-password"
              variant="filled"
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
              placeholder="email"
            />
          </li>
          <li className={css.item}>
            <TextField
              id="filled-password-input"
              label="Email"
              autoComplete="current-password"
              variant="filled"
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
              placeholder="password"
            />
          </li>
          <li className={css.item}>
            <Button className={css.button} type="submit" variant="outlined">
              sign in
            </Button>
          </li>
        </ul>
      </Box>
    </>
  );
};
