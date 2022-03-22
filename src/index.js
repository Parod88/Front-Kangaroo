import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import './index.scss';
import App from './app/App';
import RootCustomProvider from './components/RootCustomProvider/RootCustomProvider';
import storage from './utils/storage';
import { setAuthorizationHeader } from './api/client';
import configureStore from './store';

const accessToken = storage.get('auth');
const userData = storage.get('user_data');
setAuthorizationHeader(accessToken);
const history = createBrowserHistory();
const store = configureStore({ auth: !!accessToken, userData }, { history });

ReactDOM.render(
  <RootCustomProvider store={store} history={history}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RootCustomProvider>,
  document.getElementById('root')
);
