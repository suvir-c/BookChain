import auth from "./auth";
import book from "./book";
import search from "./search";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ auth, book, search });

export default rootReducer;
