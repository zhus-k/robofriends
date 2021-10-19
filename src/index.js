import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { searchRobots, requestRobots } from './reducers';

import './index.css';
import 'tachyons';

let middleware = [];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger();
  middleware = [...middleware, logger];
}

const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunk, ...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);