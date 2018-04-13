import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './header';
import List from './list';
import { fetchLists } from '../actions';

// eslint-disable-next-line
class BoardPage extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);

    console.log('Pathname: ', this.props.location.pathname);
  }

  componentDidMount() {
    console.log(typeof fetchLists);
    const [boardName, boardId] = this.props.activeBoard;
    this.props.fetchLists(boardId);
  }

  render() {
    const [boardName, boardId] = this.props.activeBoard;
    return (
      <div>
        <Header activeBoard={boardName} />
        <div className="board-title">{boardName}</div>
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
    listIds: state.Boards.byId[state.ActiveBoard[1]].lists,
    listItems: state.Lists.byId,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLists }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage);
