import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        {/* The brand name Chrello re-direct to homepage */}
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Chrello</Link>
        </div>

        {/* New Project Button... TODO: create popup component for creating a new project */}
        <button type="button" className="btn btn-default navbar-btn navbar-left">New Project</button>

        {/* Searchbar */}
        <form className="navbar-form navbar-right">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search Projects..." />
            {/* TODO: Eventually have auto-rendering dropdown list of Projects with what's typed... onChange */}
          </div>
        </form>
      </div>
    </nav>
  );
}

