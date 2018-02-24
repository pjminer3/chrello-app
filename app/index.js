import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './containers/home_page';
import BoardPage from './containers/board_page';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router >
      <div>
        <Route path="/:category/:board" component={BoardPage} />
        <Route exact path="/" component={HomePage} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'),
);
