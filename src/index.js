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
import Signout from './components/auth/signout'
import Signup from './components/auth/signup'
import Feature from './components/feature'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="resources" component={Resouces} />
        <Route path="feature" component={requireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
