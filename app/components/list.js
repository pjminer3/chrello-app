import React, { Component } from 'react';

import Card from './card';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  createCard(event) {
    return event;
  }

  render() {
    return (
      <div className="list-element">
        <div className="list-name">{this.props.listId}</div>
        <div className="cards">
          {/* existing cards */}
          {this.props.list.cards.map(card => <Card cardId={card} key={card} />)}

          {/* new card */}
          <form>
            <input type="text" placeholder="Add new card" />
          </form>
        </div>
      </div>
    );
  }
}

export default List;
