import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { createNewCategory } from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCategoryName: '',
    };

    this.updateState = this.updateState.bind(this);
    this.callNewCategoryActionCreator = this.callNewCategoryActionCreator.bind(this);
  }

  // the function that makes Category Name Input a controlled component
  updateState(event) {
    this.setState({ newCategoryName: event.target.value });
  }

  callNewCategoryActionCreator(event) {
    event.preventDefault();
    this.props.createNewCategory(this.state.newCategoryName);
    this.setState({ newCategoryName: '' });
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* The brand name Chrello re-direct to homepage */}
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Chrello</Link>
          </div>
  
          {/* New Project Button... TODO: create popup component for creating a new project */}
          <form onSubmit={this.callNewCategoryActionCreator}>
            <div className="navbar-form navbar-left">
              <input type="text" className="form-control" placeholder="Category name..." onChange={this.updateState} value={this.state.newCategoryName} />
            </div>
            <button
              type="submit"
              className="btn btn-default navbar-btn navbar-left"
              /* onClick={() => { this.callNewCategoryActionCreator(); }} */
            >
              Create New Category
            </button>
          </form>
  
          {/* Searchbar */}
          <form className="navbar-form navbar-right">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search Boards..." />
              {/* TODO: Eventually have auto-rendering dropdown list of Projects with what's typed..
              onChange */}
            </div>
          </form>
        </div>
      </nav>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewCategory }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);
