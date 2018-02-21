import React, { Component, Proptypes } from 'react';

import HeaderBar from './header_bar';

// eslint-disable-next-line
class HomePage extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderBar />
        I am at the homepage of my new app
      </div>
    );
  }
}


export default HomePage;
