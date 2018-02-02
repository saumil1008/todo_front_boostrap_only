import { combineReducers } from "redux";
import { taskReducer } from "./todo_reducer";

export default combineReducers({
  task: taskReducer
});
