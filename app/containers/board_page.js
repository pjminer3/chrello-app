import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';

// eslint-disable-next-line
class BoardPage extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Header />
        <div>{this.props.activeBoard}</div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return { activeBoard: state.ActiveBoard };
}

export default connect(mapStateToProps)(BoardPage);
