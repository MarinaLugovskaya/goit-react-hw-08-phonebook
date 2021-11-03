import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import css from '../UserMenu/UserMenu.module.css';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={css.container}>
      <span className={css.userName}>Welcome, {name}</span>
      <Button variant="outlined" type="button" onClick={() => dispatch(authOperations.logOut())}>
        Go out
      </Button>
    </div>
  );
};
