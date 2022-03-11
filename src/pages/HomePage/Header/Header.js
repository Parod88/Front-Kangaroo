import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import header from '../../../resources/images/header.png';

function Header() {
  return (
    <header id="header">
      <div className="container">
        <div className="grid">
          <div className="col-left">
            <h1>
              More Than <span>32.500+</span> Published products to find what you are looking for?
            </h1>
            {/*TODO: Implement redirection to login in case you are not logged in. */}
            <Link to="/account/products">
              <button>+ Upload your product</button>
            </Link>
          </div>
          <div className="col-right">
            <img alt="" src={header}></img>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
