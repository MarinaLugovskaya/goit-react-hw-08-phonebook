import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import css from '../RegisterView/RegisterView.module.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1 className={css.title}>Registration</h1>
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
              type="text"
              autoComplete="current-password"
              variant="filled"
              name="name"
              value={name}
              required
              placeholder="name"
              onChange={handleInputChange}
            />
          </li>
          <li className={css.item}>
            <TextField
              id="filled-password-input"
              label="Email"
              type="email"
              autoComplete="current-password"
              variant="filled"
              name="email"
              value={email}
              required
              placeholder="email"
              onChange={handleInputChange}
            />
          </li>
          <li className={css.item}>
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
              name="password"
              value={password}
              required
              placeholder="password"
              onChange={handleInputChange}
            />
          </li>
          <li className={css.item}>
            <Button className={css.button} type="submit" variant="outlined">
              sign up
            </Button>
          </li>
        </ul>
      </Box>
    </>
  );
};
