import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import './index.scss';
import App from './app/App';
import RootCustomProvider from './components/RootCustomProvider/RootCustomProvider';
import configureStore from './store';
import storage from './utils/storage';
import { setAuthorizationHeader } from './api/client';

const token = storage.get('auth');
setAuthorizationHeader(token);

const history = createBrowserHistory();
const store = configureStore({}, { history });

ReactDOM.render(
  <RootCustomProvider store={store} history={history}>
    <React.StrictMode>
      <App initiallyLogged = {!!token}/>
    </React.StrictMode>
  </RootCustomProvider>,
  document.getElementById('root')
);
