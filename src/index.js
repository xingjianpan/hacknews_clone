import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'

import App from './components/app';
import reducers from './reducers';

import {Router, Route, browserHistory} from 'react-router'
import Resouces from './components/resouces'
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      <Route path="resources" component={Resouces} />

      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
