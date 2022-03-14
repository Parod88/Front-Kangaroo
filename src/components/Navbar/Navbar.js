import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import KangarooBrand from '../../resources/svg/kangaroo-brand-color.svg';
import Button from '../../components/Button/Button';

import './Navbar.scss';

function Navbar() {
  return (
    <header id="navbar">
      <div className="container grid">
        <div className="nav-section-brand">
          <Link to="/">
            <img src={KangarooBrand} alt="brand" />
          </Link>
          <Link className="explore-link" to="/account/profile">
            <span>= </span>admin
          </Link>
        </div>
        <div className="nav-section-search">
          <p>icon</p>
          <input
            className="input"
            type="email"
            id="email"
            placeholder="Search for a product, category or vendor"
            required
            onChange={() => alert('implement')}
          ></input>
        </div>

        <div className="nav-section-buttons">
          <Button language>
            <span>icon</span>English
          </Button>
          <p>Theme</p>
          <Link to="/login">
            <Button textWhite>Login</Button>
          </Link>
          <Link to="/register">
            <Button white>SignUp</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
