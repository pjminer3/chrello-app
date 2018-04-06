import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createNewCategory, createNewList } from '../actions';
import dbCreateNewCategory from '../helpers/createCategory';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCategoryName: '',
    };

    this.updateState = this.updateState.bind(this);
    this.callNewCategoryActionCreator = this.callNewCategoryActionCreator.bind(this);
    this.callNewListActionCreator = this.callNewListActionCreator.bind(this);
  }

  // Makes Category Name Input a controlled component
  updateState(event) {
    this.setState({ newCategoryName: event.target.value });
  }

  // Creates a new Category on home page and resets input value
  callNewCategoryActionCreator(event) {
    event.preventDefault();
    this.props.createNewCategory(this.state.newCategoryName);
    dbCreateNewCategory(this.state.newCategoryName);
    this.setState({ newCategoryName: '' });
  }

  // Creates a new List on board page and resets input value
  callNewListActionCreator(event) {
    event.preventDefault();
    this.props.createNewList(this.state.newCategoryName, this.props.activeBoard);
    this.setState({ newCategoryName: '' });
  }


  render() {
    return (
      <nav className="navbar">
        <div className="nav-container">
          {/*The brand name Chrello redirect to homepage*/}
          <div className="nav-header">
            <Link to="/" className="nav-title">Chrello</Link>
          </div>

          {/*New Category/List Button*/}
          <form className="nav-form" onSubmit={this.props.type === 'HomePage' ? this.callNewCategoryActionCreator : this.callNewListActionCreator}>
            <input
              type="text"
              className="form-control"
              placeholder={this.props.type === 'HomePage' ? 'Category name...' : 'List name...'}
              onChange={this.updateState}
              value={this.state.newCategoryName}
            />
            <button
              type="submit"
              className="nav-button"
            >
            {this.props.type === 'HomePage' ? 'Create New Category' : 'Create New List'}
            </button>
          </form>
        </div>
      </nav>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewCategory, createNewList }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);
