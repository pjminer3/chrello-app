import React, { Component, Proptypes } from 'react';
import { connect } from 'react-redux';

import HeaderBar from './header';
import Category from './category';

// eslint-disable-next-line
class HomePage extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('**Inside HOMEPAGE componentDidMount**');
    // get categories from local server
    // set categories to ReduxState
  }

  render() {
    return (
      <div>
        <HeaderBar type="HomePage" />
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
