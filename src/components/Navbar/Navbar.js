import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './Navbar.scss';

function Navbar() {
  return (
    <div id="navbar">
      Navbar
      <div>
        <NavLink exact to="/" activeClassName="link-active">
          Adverts
        </NavLink>
        <br />
        <NavLink exact to="/advert" activeClassName="link-active">
          Advert detail
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
