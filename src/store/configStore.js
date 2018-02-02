import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk, logger);

export default function configStore() {
  return createStore(reducers, middleware);
}
