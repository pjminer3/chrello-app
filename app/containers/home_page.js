import React, { Component, Proptypes } from 'react';
import { connect } from 'react-redux';

import HeaderBar from './headers/homePage_header';
import Category from './category';

// eslint-disable-next-line
class HomePage extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderBar />
        {this.props.categories.allIds.map(category => <Category key={category} categoryName={category} boards={this.props.categories.byId[category].boards} />)}

        {/* <Category boardName="Personal Projects" /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.Categories };
}

export default connect(mapStateToProps)(HomePage);
