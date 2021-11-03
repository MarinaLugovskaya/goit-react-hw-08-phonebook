import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../AuthNav/AuthNav.module.css';

export const AuthNav = () => {
  return (
    <nav className={css.topMenu}>
      <NavLink className={css.link} activeClassName={css.activeLink} to="/register" exact>
        Sign up
      </NavLink>
      <NavLink className={css.link} activeClassName={css.activeLink} to="/login" exact>
        Sign in
      </NavLink>
    </nav>
  );
};
