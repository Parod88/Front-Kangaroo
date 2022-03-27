import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useTranslation } from 'react-i18next';
import KangarooBrand from '../../resources/svg/kangaroo-brand-color.svg';
import Button from '../../components/Button/Button';

import './Navbar.scss';

function Navbar() {
  const [t, i18n] = useTranslation('global');
  return (
    <header id="navbar">
      <div className="container grid">
        <div className="nav-section-brand">
          <Link to="/">
            <img src={KangarooBrand} alt="brand" />
          </Link>
          <Link className="explore-link" to="/account/profile">
            <span>{t('navbar.profile')}</span>
          </Link>
        </div>
        <div className="nav-section-search">
          <p>icon</p>
          <input
            className="input"
            type="email"
            id="email"
            placeholder={t('navbar.searchbar')}
            required
            onChange={() => alert('implement')}
          ></input>
        </div>

        <div className="nav-section-buttons">
          <Button language onClick={() => i18n.changeLanguage('en')}>
            <span>icon</span>English
          </Button>
          <Button language onClick={() => i18n.changeLanguage('es')}>
            <span>icon</span>Español
          </Button>
          <p>Theme</p>
          <Link to="/login">
            <Button textWhite>{t('navbar.login')}</Button>
          </Link>
          <Link to="/register">
            <Button white>{t('navbar.signup')}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
