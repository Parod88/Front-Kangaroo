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

//Static content pages
import AboutUsPage from '../pages/_StaticPages/AboutUsPage/AboutUsPage';
import PrivacyPolicyPage from '../pages/_StaticPages/PrivacyPolicyPage/PrivacyPolicyPage';
import TermsPage from '../pages/_StaticPages/TermsPage/TermsPage';
import SupportPage from '../pages/_StaticPages/SupportPage/SupportPage';

//Auth pages
import RegisterPage from '../pages/_Auth/RegisterPage/RegisterPage';
import ForgotPasswordPage from '../pages/_Auth/ForgotPasswordPage/ForgotPasswordPage';
import LoginPage from '../pages/_Auth/LoginPage/LoginPage';

function App({ ...props }) {
  return (
    <Switch>
      {/*Static content routes*/}
      <Route path="/about" component={AboutUsPage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/support" component={SupportPage} />

      {/*User account routes*/}
      <Route path="/account/profile" component={ProfilePage} />
      <Route path="/account/products" component={ProductsPage} />
      <Route path="/account/favorites" component={FavoritesPage} />
      <Route path="/account/chat" component={ChatPage} />
      <Route path="/account/reviews" component={ReviewsPage} />
      <Route path="/account/dashboard" component={DashboardPage} />
      <Route path="/account/logout" component={LogoutPage} />

      {/*Public routes*/}
      {/*TODO: change parameters routers, example /advert/:id */}
      <Route path="/advert" component={AdvertPage} />
      <Route path="/adverts" component={AdvertsPage} />
      <Route path="/advertisers" component={AdvertisersPage} />

      {/*Auth routes*/}
      <Route path="/forgot-password" component={ForgotPasswordPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />

      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
