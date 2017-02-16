import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'

import requireAuth from './components/require_authentication'
import App from './components/app';
import reducers from './reducers';

import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Resouces from './components/resouces'

import Signin from './components/auth/signin'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin} />
        <Route path="resources" component={Resouces} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
