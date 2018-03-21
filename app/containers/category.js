import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import { createNewBoard } from '../actions';
import BoardIcon from './board_icon';

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

  componentDidMount() {
    console.log('**Inside CATEGORY componentDidMount**');
    // get categories from localstorage (an array)
    // 
  }

  handleNameChange(event) {
    this.setState({ newBoard: event.target.value });
  }

  // this calls the action creator with boardName and category id
  handleSubmit(event) {
    event.preventDefault();
    this.props.createNewBoard(this.state.newBoard, this.props.categoryName);
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
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.categoryName}</h3>
        </div>
        <div className="panel-body">
          <div className="row boardContainer">
            {this.props.boards.map( boardName => <BoardIcon categoryName={this.props.categoryName} boardName={boardName} key={boardName} />) }

            <Button className="col-xs-6 col-md-3" bsStyle="primary" bsSize="large" onClick={this.handleShow}>Create New Board</Button>

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
  return { boards: state.Boards };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNewBoard }, dispatch);
}

export default connect(null, mapDispatchToProps)(Category);
