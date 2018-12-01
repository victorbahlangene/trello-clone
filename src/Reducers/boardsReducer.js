//evaluates any actions commited

import { NEW_BOARD } from "../Actions/boardsAction";

/*
const initialState = {
  toDoArr: []
};
*/

// clean up
//the meat of the toDoReducer
export default (state = [], action) => {
  switch (action.type) {
    case NEW_BOARD:
      return [...state, action.boardName];
    default:
      return state;
  }
};
