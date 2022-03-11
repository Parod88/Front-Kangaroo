import React from 'react';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import KangarooBrand from '../../resources/svg/kangaroo-brand-color.svg';

import './Navbar.scss';

function Navbar() {
  return (
    <header id="navbar">
      <div className="container grid">
        <div>
          <Link to="/">
            <img src={KangarooBrand} alt="brand" />
          </Link>
        </div>
        <nav>
          <NavLink exact to="/" activeClassName="link-active">
            Adverts
          </NavLink>
          <br />
          <NavLink exact to="/advert" activeClassName="link-active">
            Advert detail
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
