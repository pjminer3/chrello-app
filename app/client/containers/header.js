import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createNewCategory, createNewList, postCategory } from '../actions';
import dbCreateNewCategory from '../helpers/createCategory';
import dbCreateNewList from '../helpers/createList';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInput: '',
    };
    

    this.updateState = this.updateState.bind(this);
    this.callNewCategoryActionCreator = this.callNewCategoryActionCreator.bind(this);
    this.callNewListActionCreator = this.callNewListActionCreator.bind(this);
  }

  // Makes Category Name Input a controlled component
  updateState(event) {
    this.setState({ nameInput: event.target.value });
  }

  // Creates a new Category on home page and resets input value
  async callNewCategoryActionCreator(event) {
    event.preventDefault();
    // await dbCreateNewCategory(this.state.nameInput);
    // this.props.createNewCategory(this.state.nameInput);
    await this.props.postCategory(this.state.nameInput);
    this.setState({ nameInput: '' });
  }

  // Creates a new List on board page and resets input value
  callNewListActionCreator(event) {
    event.preventDefault();
    this.props.createNewList(this.state.nameInput, this.props.activeBoard);
    /********************************* */
    dbCreateNewList(1, this.state.nameInput); // TODO: replace 1 with real actual boardId
    /********************************* */
    this.setState({ nameInput: '' });
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
              value={this.state.nameInput}
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
  return bindActionCreators({ createNewCategory, createNewList, postCategory }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);
