/* ROOT REDUCER */

import { combineReducers } from "redux";
import boardsReducer from "./boardsReducer";
//add toDoReducer

export default combineReducers({
  //reducer name:
  listOfBoards: boardsReducer
});
