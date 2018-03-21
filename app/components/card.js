import React from 'react';

const Card = (props) => {
  return (
    <div>{`This is my card: ${props.cardId}`}</div>
  );
};

export default Card;
