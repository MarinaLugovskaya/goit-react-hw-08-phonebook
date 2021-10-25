import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        // className={css.link}
        // activeClassName={css.activeLink}
      >
        Home
      </NavLink>

      <NavLink
        to="/contacts"
        // className={css.link}
        // activeClassName={css.activeLink}
      >
        Contacts
      </NavLink>

    </nav>
  );
}