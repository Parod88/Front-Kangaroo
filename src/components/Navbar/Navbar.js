import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useTranslation } from 'react-i18next';
import KangarooBrand from '../../resources/svg/kangaroo-brand-color.svg';
import Button from '../../components/Button/Button';
import { getUserAuth, getUserData } from '../../store/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';
import './Navbar.scss';

function Navbar() {
  const userIsAuth = useSelector(getUserAuth);
  const userData = useSelector(getUserData);

  //TODO: Implement button language
  const handlerLanguage = () => {
    alert('implement');
  };

  const handlerSearch = () => {
    alert('implement');
  };

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
          <img
            className="loupe"
            alt="icon"
            src={
              'https://cdn-icons.flaticon.com/png/512/2319/premium/2319177.png?token=exp=1648047174~hmac=a3f1975c251d7c80f8335a7acd880bb2'
            }
          />

          <input
            className="input"
            type="text"
            id="search"
            placeholder="Search for a product, category or vendor"
            required
            onChange={handlerSearch}
          ></input>
        </div>

        <div className="nav-section-buttons">
          <div className="language">
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
            <button onClick={() => i18n.changeLanguage('es')}>Español</button>
          </div>
          <div>
            <img
              className="alert"
              alt="icon"
              src={
                'https://cdn-icons.flaticon.com/png/512/4196/premium/4196701.png?token=exp=1648047021~hmac=25e00903cec611e89ecbf4c28e918f1f'
              }
            />
          </div>
          {!userIsAuth ? (
            <>
              <Link to="/login">
                <Button textWhite>{t('navbar.login')}</Button>
              </Link>
              <Link to="/register">
                <Button white>{t('navbar.signup')}</Button>
              </Link>
            </>
          ) : (
            <div className="user-data">
              <Link to={`/account/profile`}>
                <div className="avatar">
                  <img className="avatar-image" src={userData.imageAvatar} />
                  <div>
                    <p>Hello</p>
                    <p className="name">{userData.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
