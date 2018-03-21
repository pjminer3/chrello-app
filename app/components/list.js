import React from 'react';

import Card from './card';

const List = (props) => {
  return (
    <div className="list-element">
      <div className="list-name">{props.listId}</div>
      <div className="cards">
        {props.list.cards.map(card => <Card cardId={card} key={card} />)}
      </div>
    </div>
  );
};

export default List;
