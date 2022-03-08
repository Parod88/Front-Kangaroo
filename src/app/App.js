import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import AdvertsPage from '../pages/AdvertsPage/AdvertsPage';
import AdvertPage from '../pages/AdvertPage/AdvertPage';

function App({ ...props }) {
  return (
    <Switch>
      <Route path="/advert" component={AdvertPage} />
      <Route path="/" component={AdvertsPage} />
    </Switch>
  );
}

export default App;
