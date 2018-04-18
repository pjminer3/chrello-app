import React, { Component, Proptypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HeaderBar from './header';
import Category from './category';
import { fetchCategories, createNewCategory } from '../actions';

// eslint-disable-next-line
class HomePage extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // check to see if redux state is already there
    const categoryIds = Object.keys(this.props.categories.byId);
    if (categoryIds.length > 0) {
      console.log('NOT fetching categories');
      return;
    }
    
    console.log('Fetching categories');
    this.props.fetchCategories();
  }

  render() {
    return (
      <div id="#body">
        <HeaderBar type="HomePage" />
        <div className="category-container">
          {/* Renders each category in Redux State */}
          {this.props.categories.allIds.map(([categoryName, categoryId]) => <Category key={categoryId} categoryId={categoryId} categoryName={categoryName}  boards={this.props.categories.byId[categoryId].boards} />)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    categories: state.Categories,
    isFetching: state.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
