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
        <Header activeBoard={this.props.activeBoard} />
        <div>{`This is board ${this.props.activeBoard}`}</div>
        <div className="lists-container">
          {this.props.listIds.map(listId => <List listId={listId} list={this.props.listItems[listId]} key={listId} />)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Map the active board, that board's lists, and all lists to props
  return {
    activeBoard: state.ActiveBoard,
    listIds: state.Boards.byId[state.ActiveBoard].lists,
    listItems: state.Lists.byId,
  };
}

export default connect(mapStateToProps)(BoardPage);
