import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setActiveBoard } from '../actions';

const BoardIcon = (props) => {
  const boardPage = `/${props.categoryName}/${props.boardId}`;

  return (
    // eslint-disable-next-line
    <Link to={boardPage} onMouseOver={() => { props.setActiveBoard([props.boardName, props.boardId]); }}>
      <div className="board-icon">
        <div className="top">
          <p className="board-icon-title">{props.boardName}</p>
          <i className="fas fa-trash" />
        </div>
      </div>
    </Link>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveBoard }, dispatch);
}

export default connect(null, mapDispatchToProps)(BoardIcon);

