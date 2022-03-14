import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import HomePage from '../pages/HomePage/HomePage';
import AdvertisersPage from '../pages/AdvertisersPage/AdvertisersPage';
import AdvertsPage from '../pages/AdvertsPage/AdvertsPage';
import AdvertPage from '../pages/AdvertPage/AdvertPage';

//User account pages
import ProfilePage from '../pages/_Account/ProfilePage/ProfilePage';
import ProductsPage from '../pages/_Account/ProductsPage/ProductsPage';
import FavoritesPage from '../pages/_Account/FavoritesPage/FavoritesPage';
import ChatPage from '../pages/_Account/ChatPage/ChatPage';
import ReviewsPage from '../pages/_Account/ReviewsPage/ReviewsPage';
import DashboardPage from '../pages/_Account/DashboardPage/DashboardPage';
import LogoutPage from '../pages/_Account/LogoutPage/LogoutPage';

import AdvertEdit from '../pages/_Account/AdvertEdit/AdvertEdit';
import AdvertCreate from '../pages/_Account/AdvertCreate/AdvertCreate';
import ProfileEdit from '../pages/_Account/ProfileEdit/ProfileEdit';

//Static content pages
import AboutUsPage from '../pages/_StaticPages/AboutUsPage/AboutUsPage';
import PrivacyPolicyPage from '../pages/_StaticPages/PrivacyPolicyPage/PrivacyPolicyPage';
import TermsPage from '../pages/_StaticPages/TermsPage/TermsPage';
import SupportPage from '../pages/_StaticPages/SupportPage/SupportPage';

//Auth pages
import RegisterPage from '../pages/_Auth/RegisterPage/RegisterPage';
import LoginPage from '../pages/_Auth/LoginPage/LoginPage';
import PasswordForgotPage from '../pages/_Auth/PasswordForgotPage/PasswordForgotPage';
import PasswordResetPage from '../pages/_Auth/PasswordResetPage/PasswordResetPage';

function App({ ...props }) {
  return (
    <Switch>
      {/*Static content routes*/}
      <Route exact path="/about" component={AboutUsPage} />
      <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route exact path="/terms" component={TermsPage} />
      <Route exact path="/support" component={SupportPage} />

      {/*User account routes*/}
      {/*TODO: add id params user accoutn*/}
      <Route exact path="/account/profile/" component={ProfilePage} />
      <Route exact path="/account/products" component={ProductsPage} />
      <Route exact path="/account/favorites" component={FavoritesPage} />
      <Route exact path="/account/chat" component={ChatPage} />
      <Route exact path="/account/reviews" component={ReviewsPage} />
      <Route exact path="/account/dashboard" component={DashboardPage} />
      <Route exact path="/account/logout" component={LogoutPage} />

      <Route exact path="/account/:id/edit" component={ProfileEdit} />

      {/*Public routes*/}
      {/*TODO: change parameters routers, example /advert/:id */}
      <Route exact path="/adverts" component={AdvertsPage} />
      <Route exact path="/adverts/categories/:id" component={AdvertsPage} />

      <Route exact path="/advert/create" component={AdvertCreate} />
      <Route exact path="/advert/:id/edit" component={AdvertEdit} />
      <Route exact path="/advert/:id" component={AdvertPage} />

      <Route exact path="/advertisers" component={AdvertisersPage} />

      {/*Auth routes*/}
      <Route path="/reset-password/:userToken" component={PasswordResetPage} />
      {/* <Route exact path={`/reset-password/${userToken}`} component={PasswordResetPage} /> */}
      <Route exact path="/forgot-password" component={PasswordForgotPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />

      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
