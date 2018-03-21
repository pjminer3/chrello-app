import React from 'react';

const List = (props) => {
  return (
    <div className="list-element">
      {`This is list ${props.listId}`}
    </div>
  );
};

export default List;
