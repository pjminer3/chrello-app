import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { createNewCategory, createNewList } from '../actions';

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

  callNewListActionCreator(event) {
    event.preventDefault();
    this.props.createNewList(this.state.newCategoryName);
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
  
          {/* New Category/List Button */}
          <form onSubmit={ this.props.type === 'HomePage' ? this.callNewCategoryActionCreator : () => 'this.callNewListActionCreator'}>
            <div className="navbar-form navbar-left">
              <input type="text" className="form-control" placeholder={this.props.type === 'HomePage' ? 'Category name...' : 'List name...'} onChange={this.updateState} value={this.state.newCategoryName} />
            </div>
            <button
              type="submit"
              className="btn btn-default navbar-btn navbar-left"
            >
              {this.props.type === 'HomePage' ? 'Create New Category' : 'Create New List'}
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
  return bindActionCreators({ createNewCategory, createNewList }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);
