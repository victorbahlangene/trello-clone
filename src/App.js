import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Header from "./Static/Header";
import Footer from "./Static/Footer";
import Home from "./Static/Home";
import Tasks from "./Components/Tasks";
import AddToBoard from "./Components/AddToBoard";
import AddAList from "./Components/AddAList";
import HomeButton from "./Static/HomeButton";
import { Provider } from "react-redux";
//store
import store from "./Store/store";

/* finish up front page */

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="body">
            {/*<Header />*/}
            <HomeButton />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/tasks" component={Tasks} />
              <Route exact path="/addToBoard" component={AddToBoard} />
              <Route exact path="/addAList" component={AddAList} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
/*
const body = {
  fontSize: "15px",
  lineHeight: "1.5",
  fontfamily: "Arial, Helvetica, sans-serif",
  padding: "0",
  margin: "0",
  backgroundColor: "lightBlue",
  width: "100%"
};
*/
export default App;
