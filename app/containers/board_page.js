import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import List from './list';

// eslint-disable-next-line
class BoardPage extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);

    console.log('Pathname: ', this.props.location.pathname);

  }

  render() {
    return (
      <div>
        <Header />
        <div>{`This is board ${this.props.activeBoard}`}</div>
        <div className="list-container">
          {this.props.listIds.map(listId => <List listId={listId} />)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Map the active board as well as that board's lists to props
  return { activeBoard: state.ActiveBoard, listIds: state.Boards.byId[state.ActiveBoard].lists };
}

export default connect(mapStateToProps)(BoardPage);
