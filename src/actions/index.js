import { addToDB, fetch_todo, delete_todo, update_todo } from "./crud";
import * as type from "./actionTypes";

const addTask = (id, task, desc, createdon, modifiedon) => {
    // if (id) {
    //   console.log("inside if----------");
    //   updateTask(id, task, desc, createdon);
    // } else {
    return dispatch => {
      addToDB(task, desc, id, dispatch);
    };
  },
  editTask = todo_item => {
    return { type: type.EDIT_TODO, todo_item };
  },
  reloadTask = () => {
    return dispatch => {
      fetch_todo(dispatch);
    };
  },
  updateTask = (id, title, description, createdon) => {
    console.log("inside update-----");
    return dispatch => {
      update_todo(id, title, description, createdon, dispatch);
    };
  },
  deleteTask = (title, taskId) => {
    return dispatch => {
      delete_todo(title, taskId, dispatch);
    };
  };

export default { addTask, reloadTask, deleteTask, updateTask, editTask };
