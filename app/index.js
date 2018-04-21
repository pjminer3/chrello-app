import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './client/containers/home_page';
import BoardPage from './client/containers/board_page';
import reducers from './client/reducers/index';

// css
import './public/assets/stylesheet.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, 
  composeEnhancers(applyMiddleware(thunk))
);

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
