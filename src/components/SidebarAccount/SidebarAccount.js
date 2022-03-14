import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarAccount.scss';

function SidebarAccount() {
  //TODO: User id mock data, read id params url http://localhost:3000/account/:id/profile
  const _id = 5;

  return (
    <nav id="sidebar-account">
      <ul>
        <li>
          <NavLink to={`/account/profile`} activeClassName="selected">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to={`/account/products`} activeClassName="selected">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to={`/account/favorites`} activeClassName="selected">
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink to={`/account/messages`} activeClassName="selected">
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to={`/account/reviews`} activeClassName="selected">
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink to={`/account/dashboard`} activeClassName="selected">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to={`/account/logout`} activeClassName="selected">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarAccount;
