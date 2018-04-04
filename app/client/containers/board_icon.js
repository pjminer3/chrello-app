import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setActiveBoard } from '../actions';

const BoardIcon = (props) => {

  const boardPage = `/${props.categoryName}/${props.boardName}`;

  return (
    // eslint-disable-next-line
    <Link to={boardPage} onMouseOver={() => { props.setActiveBoard(props.boardName); }}>
      <div className="board-icon">
        <div className="top">
          <p className="board-icon-title">{props.boardName}</p>
          <i className="fas fa-trash" />
        </div>
        {/* <p className="board-icon-title">{props.boardName}</p> */}
      </div>
    </Link>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveBoard }, dispatch);
}

export default connect(null, mapDispatchToProps)(BoardIcon);
