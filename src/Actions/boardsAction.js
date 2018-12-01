export const NEW_BOARD = "NEW_BOARD";
//export const NEW_POST = "NEW_POST";

//ACTION CREATOR
export const addBoad = name => {
  return {
    type: NEW_BOARD,
    boardName: name
  };
};
