import React, { Component } from "react";
import { connect } from "react-redux";
import { addBoad } from "../Actions/boardsAction";

class AddAList extends Component {
  render() {
    /*
    const displayBoard = this.props.boardClicked.map((val, idx) => {
      return (
        <ul>
          <li
            key={idx}
            onClick={this.handleClickBoardName.bind(this, idx)}
            className="btn btn-light"
          >
            {val}
          </li>
        </ul>
      );
    });
    */

    return (
      <div className="container">
        <form>
          {/* find a way to display the value of the clicked board in the button */}
          <h1>{this.props.listOfBoards}</h1>
          <br />
          <br />
          <input type="text" placeholder="add a list" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { listOfBoards: state.listOfBoards };
};

const mapDispatchToProps = dispatch => {
  return {
    submitNewBoard: boardName => {
      dispatch(addBoad(boardName));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAList);
