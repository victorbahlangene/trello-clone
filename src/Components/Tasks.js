import React, { Component } from "react";
import AddToBoard from "./AddToBoard";
//import AddAList from "./AddAList";

//redux
import { connect } from "react-redux";
import { addBoad } from "../Actions/boardsAction";

/* finish app */
/* store boards in local storage */
/* store boards on firebase */
class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardIsHidden: true,
      boardName: "",
      test: "this is a test"
    };
  }

  onHandleCreateBoard = () => {
    this.setState({ boardIsHidden: !this.state.boardIsHidden });
    //console.log(this.state.board);
  };

  handleBoardNameSubmit = e => {
    e.preventDefault();
    //console.log(this.state.boardName);

    //apon submission hide the form
    this.setState({
      boardIsHidden: !this.state.boardIsHidden
    });

    //adding created board to the list of boards
    this.props.submitNewBoard(this.state.boardName);
    /*
    this.setState({
      listOfBoards: [...this.state.listOfBoards, this.state.boardName]
    });
    */
    //this disables the button so that we dont submit the form twice
    document.getElementById("myButton").disabled = true;
    return true;

    /*
    console.log(this.state.boardSubmitted);
    console.log("form submitted");
    console.log(this.state.boardName);
    */
  };
  NewBoardName = e => {
    this.setState({
      boardName: e.target.value
    });
  };

  //When we click the board name
  boardNameClick = val => {
    console.log(val);
  };

  render() {
    //mapping thru the created boards to display them as a list
    /*
    const boardsCreated = this.state.listOfBoards.map((val, idx) => {
      return (
        <li key={idx}>
          <Link to="/addToBoard">
            <button
              className="btn btn-light"
              onClick={this.boardNameClick.bind(this, val)}
            >
              {val}
            </button>
          </Link>
        </li>
      );
    });
    */
    return (
      <div>
        <div className="container">
          <button
            id="createNewBoard"
            className="btn btn-primary"
            onClick={this.onHandleCreateBoard.bind(this)}
          >
            Create a new board..
          </button>
          {!this.state.boardIsHidden && (
            <div className="container">
              <form id="createBoard" onSubmit={this.handleBoardNameSubmit}>
                what shall we call the board?
                <br />
                <input type="text" onChange={this.NewBoardName} />
                <br />
                <button className="btn btn-light">Cancel</button>
                <button type="submit" className="btn btn-success" id="myButton">
                  Create
                </button>
              </form>
            </div>
          )}

          {/*this.state.boardSubmitted ? (
            <div className="container">
              <br />
              <button className="btn btn-light">{this.state.boardName}</button>
            </div>
          ) : (
            ""
          )*/}
          <hr />
          {/* list of boards created */}
          {/* <ul id="createdBoards">{boardsCreated}</ul> */}
          {/* when the board name is selected */}
          <AddToBoard boardNames={this.props.listOfBoards} />
        </div>
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
)(Tasks);
