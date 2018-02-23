import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createNewBoard } from '../actions';

class Category extends Component {
  // Receives Category Name from HomePage component which connects to Redux
  // Will want to receive the 'add board' action creator via REDUX
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.boardName}</h3>
        </div>
        <div className="panel-body">
          {/* -------------------------- Create a way to dynamically render existing boards 
          ----------------------------------------------------
          ---------------------------------------------------
          ----------------------------------------------------*/}

          {/* Create a 'New Board' Modal */}
          <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#newBoard">Create New Board</button>

          {/* Modal */}
          <div id="newBoard" className="modal fade" role="dialog">
            <div className="modal-dialog">
              {/* Modal content */}
              <div className="modal-content">
                <div className="model-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Create New Board</h4>
                </div>
                <form onSubmit={() => console.log('Form submitted')}>
                  <div className="modal-body">
                    <input placeholder="Enter board name..." />
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-default" data-dismiss="modal">Submit</button>
                  </div>
                </form>
              </div>

            </div>
          </div>


        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewBoard }, dispatch);
}

export default connect(null, mapDispatchToProps)(Category);
