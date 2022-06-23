import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import usersReducers from "./reducers/userReducer";

const store = createStore(usersReducers, applyMiddleware(logger, thunk));

export default store;
