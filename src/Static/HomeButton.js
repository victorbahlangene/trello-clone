import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeButton extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/tasks">
          <button className="btn btn-secondary" onClick={this.onHandleHome}>
            <i className="fa fa-home fa-lg" />
          </button>
        </Link>
        <br />
        <hr />
      </div>
    );
  }
}

export default HomeButton;
