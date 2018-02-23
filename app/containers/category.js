import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createNewBoard } from '../actions';

class Category extends Component {
  // Receives Category Name from HomePage component which connects to Redux
  // Will want to receive the 'add board' action creator via REDUX
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  bindActionCreators({ createNewBoard }, dispatch);
};

export default connect(null, mapDispatchToProps)(Category);