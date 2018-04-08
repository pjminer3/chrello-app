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
    console.log(typeof this.props.fetchCategories);
    this.props.fetchCategories();
  }

  render() {
    if (this.props.isFetching) {
      return <div>loading...</div>
    }
    
    return (
      <div id="#body">
        <HeaderBar type="HomePage" />
        <div className="category-container">
          {/* Renders each category in Redux State */}
          {this.props.categories.allIds.map(category => <Category key={category} categoryName={category} boards={this.props.categories.byId[category].boards} />)}
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
  return bindActionCreators({ fetchCategories: fetchCategories }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
