import initState from "./initState";
import * as actionTypes from "../actions/actionTypes";

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO_SUCCESS:
      state.id = null;
      state.title = "";
      state.desc = "";
      state.createdon = "";
      state.modifiedon = "";
      return null;

    case actionTypes.FETCH_TODO_SUCCESS:
      state.todo_item = [...action.payload];
      return { ...state };

    case actionTypes.EDIT_TODO:
      console.log("actions: ", action);
      state.title = action.todo_item.title;
      state.desc = action.todo_item.description;
      state.id = action.todo_item.id;
      state.createdon = action.todo_item.createdon;
      state.modifiedon = action.todo_item.modifiedon;
      return { ...state };

    case actionTypes.DELETE_TODO_SUCCESS:
      let deleteTemp = [];
      for (let i in state.todo_item) {
        console.log(i);
        console.log(state.todo_item[i].id);
        if (state.todo_item[i].id === action.payload) {
        } else {
          deleteTemp.push(state.todo_item[i]);
        }
      }
      state.todo_item = deleteTemp;
      return { ...state };

    case actionTypes.UPDATE_TODO_SUCCESS:
      console.log("update reduce--", action.payload);
      let editTemp = [];
      for (let i in state.todo_item) {
        console.log(i);
        console.log(state.todo_item[i].id);
        if (state.todo_item[i].id === action.payload.id) {
          editTemp.push(action.payload);
        } else {
          editTemp.push(state.todo_item[i]);
        }
      }
      state.id = null;
      state.title = "";
      state.desc = "";
      state.createdon = "";
      state.modifiedon = "";
      state.todo_item = editTemp;
      return { ...state };

    default:
      return { ...state };
  }
};

export { taskReducer };
