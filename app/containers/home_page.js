import React, { Component, Proptypes } from 'react';

import HeaderBar from './header_bar';
import Category from './category';

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
        <Category boardName="Personal Projects" />
      </div>
    );
  }
}


export default HomePage;
