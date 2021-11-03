import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import css from '../Navigation/Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={css.topMenu}>
      <NavLink className={css.link} activeClassName={css.activeLink} to="/" exact>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} activeClassName={css.activeLink} to="/contacts" exact>
          Notes
        </NavLink>
      )}
    </nav>
  );
};
