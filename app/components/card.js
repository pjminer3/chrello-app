import React from 'react';

const Card = (props) => {
  return (
    <div className="card">{`This is my card: ${props.cardId}`}</div>
  );
};

export default Card;
