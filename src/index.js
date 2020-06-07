import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import './scss/index.scss';
import App from './App';
import { formsQuery } from "./actions/forms";

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(...middleware)
  ));

store.dispatch(formsQuery().runMocked());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
