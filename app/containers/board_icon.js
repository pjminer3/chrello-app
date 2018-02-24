import React from 'react';

const BoardIcon = (props) => {
  return (
    <div className="col-xs-6 col-md-3">
      <p>{props.boardName}</p>
    </div>
  );
};

export default BoardIcon;
