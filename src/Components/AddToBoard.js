import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddToBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrivingBoard: {}
    };
  }
  handleClickBoardName = formKey => {
    //console.log(`the key for the form is ${formKey}`);
    //when the board is created,clicking it should open a new page with the back button,the board name,and a form bellow it requesting me to add a list item
  };

  render() {
    const arrivingBoard = this.props.boardNames.map((val, idx) => {
      return (
        <ul key={idx}>
          {/*
          <Link to="/addAList">
            <li
              key={idx}
              onClick={this.handleClickBoardName.bind(this, idx)}
              className="btn btn-light"
            >
              {val}
            </li>
          </Link>
        */}
          <Link
            to={{
              pathname: "/addAList",
              state: {
                arrivingBoardVal: val
              }
            }}
          >
            <li
              key={idx}
              onClick={this.handleClickBoardName.bind(this, idx)}
              className="btn btn-light"
            >
              {val}
            </li>
          </Link>
        </ul>
      );
    });
    /*try: 
<Link to={{ pathname: '/route', state: { foo: 'bar'} }}>My route</Link>

//Then you can access the state object from within your component:
const {foo} = props.location.state
console.log(foo) // "bar"
*/

    return (
      <div>
        <br />
        <div className="container">
          {arrivingBoard}
          <hr />
        </div>
      </div>
    );
  }
}

export default AddToBoard;
