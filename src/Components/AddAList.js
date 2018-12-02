import React, { Component } from "react";

/* MAKE SURE FINAL LIST DISPLAYS BELOW THE ELEMEMENT THE INPUTED IT */
/* ADD DRAG AND PULL FUNCTİONALİTY */
/* ADD LOCAL STORAGE */
/* STYLE WİTH CSS */
/* ADD TO FİREBASE  */
/* BUİLD APP */
/* ADD TO PORTFOLİO PAGE */
class AddAList extends Component {
  state = {
    list: "",
    listNameDisp: [],
    finalList: "",
    finalListDisp: []
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      listNameDisp: [...this.state.listNameDisp, this.state.list],
      list: ""
    });
  };

  handleChange = e => {
    this.setState({
      list: e.target.value
    });
  };

  /*
  submitFinalList = e => {
    e.preventDefault();

    this.setState({
      finalListDisp: [...this.state.finalListDisp, this.state.finalList],
      list: ""
    });

    //console.log("add task");
  };

  finalChange = e => {
    this.setState({ finalList: e.target.value });
  };
*/
  render() {
    //getting value from the link
    const { arrivingBoardVal } = this.props.location.state;

    const thisTask = this.state.listNameDisp.map((val, idx) => {
      return (
        <li key={idx}>
          <form onSubmit={this.submitFinalList.bind(this)}>
            <button className="btn btn-success">{val}</button>
            <br />
            <input type="text" onChange={this.finalChange.bind(this)} />
          </form>
        </li>
      );
      //place final list here
    });
    /*
    const finalTask = this.state.finalListDisp.map((val, idx) => {
      return <li key={idx}>{val}</li>;
    });
*/
    return (
      <div className="container">
        <h1 id="arrivingBoardVal" className="btn btn-light container">
          {arrivingBoardVal}
        </h1>
        <hr />

        <ul id="ul">
          {thisTask}
          {/* finalTask */}

          <li>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <br />
              <br />
              <div className="container1">
                <input
                  className="card"
                  type="text"
                  placeholder="add a list"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.list}
                />
              </div>
            </form>
          </li>
        </ul>

        <br />
      </div>
    );
  }
}

export default AddAList;
