import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={css.Searchbar}>
        <nav>
          <NavLink
            to="/"
            exact
            className={css.link}
            activeClassName={css.activeLink}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={css.link}
            activeClassName={css.activeLink}
          >
            Movies
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
