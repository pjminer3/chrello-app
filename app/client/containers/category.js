import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import { createNewBoard, fetchBoards } from '../actions';
import BoardIcon from './board_icon';
import dbCreateBoard from '../helpers/createBoard';

class Category extends Component {
  // Receives Category Name from HomePage component which connects to Redux
  // Will want to receive the 'add board' action creator via REDUX
  constructor(props) {
    super(props);

    this.state = {
      newBoard: '',
      show: false,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentWillUnmount() {
    
  }

  componentDidMount() {
    // check if there are already boards
    if (this.props.categories.byId[this.props.categoryId].boards.length > 0) {
      return;
    }
    
    this.props.fetchBoards({categoryId: this.props.categoryId, categoryName: this.props.categoryName});
  }

  handleNameChange(event) {
    this.setState({ newBoard: event.target.value });
  }

  // this calls the action creator with boardName and category id
  async handleSubmit(event) {
    event.preventDefault();
    await dbCreateBoard(this.props.categoryId, this.state.newBoard);
    this.props.createNewBoard(this.state.newBoard, this.props.categoryId)
    this.setState({ newBoard: '', show: false });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="panel panel-default category">
        <div className="panel-heading">
          <h3 className="panel-title" id="panel-title">{this.props.categoryName}</h3>
          {/* close button */}
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="board-container">
              {this.props.categories.byId[this.props.categoryId].boards.map( ([boardName, boardId]) => <BoardIcon categoryName={this.props.categoryName} categoryId={this.props.categoryId} boardName={boardName} key={boardId} boardId={boardId} />) }
            </div>

            <Button
              className="col-xs-6 col-md-3"
              bsStyle="primary" bsSize="large"
              onClick={this.handleShow}
              id="new-board-button"
            >
              Create New Board
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Create New Board</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <form onSubmit={this.handleSubmit}>
                  <input placeholder="Enter board name..." value={this.state.newBoard} onChange={this.handleNameChange} />
                  <button className="btn btn-success" type="submit">Submit</button>
                </form>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.Categories
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewBoard, fetchBoards }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
