import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={() => props.deleteCard(props.listId, props.index)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="card-text">{props.cardContent}</div>
    </div>
  );
};

export default Card;
