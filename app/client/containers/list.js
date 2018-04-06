import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '../components/card';
import { createNewCard, deleteCard } from '../actions';
import dbCreateNewCard from '../helpers/createCard';

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
    this.props.createNewCard(this.state.cardValue, this.props.listId);
    /************************************************** */
    dbCreateNewCard(1, this.state.cardValue); // TODO: GET HOOKED UP WITH REAL CARD VALUE
    /************************************************** */
    this.setState({ cardValue: '' });
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
          {this.props.list.cards.map((card, idx) => {
            return (
              <Card
                cardContent={card}
                deleteCard={this.props.deleteCard}
                key={`${idx}-${card}`}
                index={idx}
                listId={this.props.listId}
              />
            );
          })}
        </div>
        {/* new card */}
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add new card" value={this.state.cardValue} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewCard, deleteCard }, dispatch);
}

export default connect(null, mapDispatchToProps)(List);
