import React from 'react';
import { Link } from 'react-router-dom';

import { setActiveBoard } from '../actions';

const BoardIcon = (props) => {
  const boardStyles = {
    border: 'solid',
    borderColor: 'grey',
  };

  const boardPage = `/${props.categoryName}/${props.boardName}`;

  return (
    <Link to={boardPage}>
      <div className="col-xs-6 col-md-3" style={boardStyles}>
        <p style={{ color: 'red' }}>{props.boardName}</p>
      </div>
    </Link>
  );
};

export default BoardIcon;
