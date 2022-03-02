import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import './index.scss';
import App from './app/App';
import RootCustomProvider from './components/RootCustomProvider/RootCustomProvider';
import configureStore from './store';

const history = createBrowserHistory();
const store = configureStore({}, { history });

ReactDOM.render(
  <RootCustomProvider store={store} history={history}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RootCustomProvider>,
  document.getElementById('root')
);
