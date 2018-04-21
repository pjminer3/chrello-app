import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '../components/card';
import { createNewCard, deleteCard, fetchCards, addCardToList } from '../actions';
import dbCreateNewCard from '../helpers/createCard';

class List extends Component {
  // props: listId={list.id} list={list.listName}
  constructor(props) {
    super(props);

    this.state = {
      cardValue: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // fetch all cards for specified list Id
    this.props.fetchCards(this.props.listId);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCardToList(this.props.listId, this.state.cardValue);
    this.setState({ cardValue: '' });
  }

  handleChange(event) {
    this.setState({ cardValue: event.target.value });
  }

  render() {
    return (
      <div className="list-element">
        <div className="list-name">{this.props.list}</div>
        <div className="cards">
          {/* renders cards if there are any */}
          {this.props.lists[this.props.listId].cards ? this.props.lists[this.props.listId].cards.map((card, idx) => {
            return (
              <Card
                cardContent={card.cardContent}
                deleteCard={this.props.deleteCard}
                key={`${idx}-${card.cardContent}`}
                index={idx}
                listId={this.props.listId}
              />
            );
          }) : null}
        </div>
        {/* new card */}
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add new card" value={this.state.cardValue} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { lists: state.Lists }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewCard, deleteCard, fetchCards, addCardToList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
