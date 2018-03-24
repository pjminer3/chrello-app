import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="card-text">{`This is my card: ${props.cardId}`}</div>
    </div>
  );
};

export default Card;
