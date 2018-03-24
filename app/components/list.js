import React, { Component } from 'react';

import Card from './card';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardValue: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('We create new card: ', this.state.cardValue);
    // call new card action creator
    this.setState({ cardValue: '' });

    // add the card to the beginning of the proper list's cards array of List redux store
    // create the Card in redux store
      // add the card byId
      // add the card to the allIds array
  }

  handleChange(event) {
    this.setState({ cardValue: event.target.value });
  }

  render() {
    return (
      <div className="list-element">
        <div className="list-name">{this.props.listId}</div>
        <div className="cards">
          {/* existing cards */}
          {this.props.list.cards.map(card => <Card cardId={card} key={card} />)}

          {/* new card */}
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Add new card" value={this.state.cardValue} onChange={this.handleChange} />
          </form>
        </div>
      </div>
    );
  }
}

export default List;
