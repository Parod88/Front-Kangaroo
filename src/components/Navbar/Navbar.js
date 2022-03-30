import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useTranslation } from 'react-i18next';
import KangarooBrand from '../../resources/svg/kangaroo-brand-color.svg';
import Button from '../../components/Button/Button';
import { getUserAuth, getUserData } from '../../store/selectors/selectors';
import { useSelector } from 'react-redux';
import ChatIcon from '@mui/icons-material/Chat';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const history = useHistory()
  const userIsAuth = useSelector(getUserAuth);
  const userData = useSelector(getUserData);

  const [filter, setFilter] = useState([]);

  const handleChange = e => {
    setFilter(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (onSubmit) => (ev) => {
    ev.preventDefault();
    onSubmit(filter);
  };

  const {name} = filter;
  const [t, i18n] = useTranslation('global');

  const value = `?name=${filter}`

  return (
    <header id="navbar">
      <div className="container grid">
        <div className="nav-section-brand">
          <Link to="/">
            <img src={KangarooBrand} alt="brand" />
          </Link>
          <Link className="explore-link" to={`/account/profile/${userData._id}`}>
            <span>{t('navbar.profile')}</span>
          </Link>
        </div>
        
        <form className="form" onSubmit={handleSubmit} value={value}>
        <div className="nav-section-search">
          <span className="icon">
            <SearchOutlinedIcon />
          </span>
          <input
            className="filter-name"
            placeholder="Search by name"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          ></input>
          <Button primaryOutline type="submit" onClick={() => { history.push(`/adverts/${value}`)}}>
              🔎 Filter
          </Button>
        </div>
        
        </form>
        

        <div className="nav-section-buttons">
          <div className="language">
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
            <button onClick={() => i18n.changeLanguage('es')}>Español</button>
          </div>
          <div>
            <Link to="/account/messages">
              <ChatIcon />
            </Link>
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
              <Link to={`/account/profile/${userData._id}`}>
                <div className="avatar">
                  <img alt={userData?.name} className="avatar-image" src={userData?.imageAvatar} />
                  <div>
                    <p>Hello</p>
                    <p className="name">{userData?.name}</p>
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
