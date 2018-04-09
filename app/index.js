import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './client/containers/home_page';
import BoardPage from './client/containers/board_page';
import reducers from './client/reducers/index';

// css
import './public/assets/stylesheet.css';

const store = createStore(reducers, applyMiddleware(thunk));

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

