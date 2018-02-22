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
          <div className="navbar-form navbar-left">
            <input type="text" className="form-control" placeholder="Category name..." />
          </div>
          <button
            type="button"
            className="btn btn-default navbar-btn navbar-left"
          >
            Create New Category
          </button>
  
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
