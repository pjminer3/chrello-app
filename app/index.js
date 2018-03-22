import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './containers/home_page';
import BoardPage from './containers/board_page';
import reducers from './reducers/index';

// initial state for dev purposes only
import initialState from './application_state';

// css
import './public/assets/stylesheet.css';

const store = createStore(reducers, initialState, applyMiddleware(ReduxPromise));

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <div>
        <Route path="/:category/:board" component={BoardPage} />
        <Route exact path="/" component={HomePage} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'),
);
