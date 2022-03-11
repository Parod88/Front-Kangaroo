import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import KangarooBrand from '../../resources/svg/kangaroo-brand-color.svg';

import './Navbar.scss';

function Navbar() {
  return (
    <header id="navbar">
      <div className="container grid">
        <div className="nav-section-brand">
          <Link to="/">
            <img src={KangarooBrand} alt="brand" />
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
          <p>LanguageButton</p>
          <p>ThemeIcon</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Create account</button>
          </Link>
          <Link to="/account/profile">
            <button>Admin temporal access</button>
          </Link>
          <Link to="/adverts/?cateogie=car">
            <button>Categorie Search</button>
          </Link>
          <Link to="/adverts">
            <button>Adverts Search</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
