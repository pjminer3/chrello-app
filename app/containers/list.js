import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '../components/card';
import { createNewCard } from '../actions';

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
          {this.props.list.cards.map((card, idx) => <Card cardId={card} key={idx} />)}

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
  return bindActionCreators({ createNewCard }, dispatch);
}

export default connect(null, mapDispatchToProps)(List);
