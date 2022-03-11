import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarAccount.scss';

function SidebarAccount() {
  return (
    <nav id="sidebar-account">
      <ul>
        <li>
          <NavLink to="/account/profile" activeClassName="selected">
            profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/account/products" activeClassName="selected">
            products
          </NavLink>
        </li>
        <li>
          <NavLink to="/account/favorites" activeClassName="selected">
            favorites
          </NavLink>
        </li>
        <li>
          <NavLink to="/account/chat" activeClassName="selected">
            chat
          </NavLink>
        </li>
        <li>
          <NavLink to="/account/reviews" activeClassName="selected">
            reviews
          </NavLink>
        </li>
        <li>
          <NavLink to="/account/dashboard" activeClassName="selected">
            dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/account/logout" activeClassName="selected">
            logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarAccount;
