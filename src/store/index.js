import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import thunk from 'redux-thunk';
import * as reducers from './reducers/reducers';
import * as adverts from '../api/services/advertService';
import * as users from '../pages/_Auth/service';

const api = { adverts, users };

// //Reducer enhancer, so actions saves an entry in history
// const actionsHistory =
//   (historyLength) => (createStore) => (reducer, initialState, enhancer) => {
//     const actionsHistoryReducer = ({ history, ...prevState }, action) => {
//       const nextState = reducer(prevState, action);
//       return {
//         ...nextState,
//         history: (history || [])
//           .concat({ prevState, action, nextState })
//           .slice(-historyLength),
//       };
//     };
//     return createStore(actionsHistoryReducer, initialState, enhancer);
//   };

const configureStore = (preloadedState, { history }) => {
  const middlewares = [
    routerMiddleware(history),
    thunk.withExtraArgument({ api, history }),
    logger
  ];
  const store = createStore(
    combineReducers({ ...reducers, router: connectRouter(history) }),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
};

export default configureStore;
