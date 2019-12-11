import postReducer from "./postReducer";
import loginReducer from "./loginReducer";
import logoutReducer from "./logoutReducer";
import isLoggedReducer from "./isLogged";
import searchReducer from "./searchReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: loginReducer,
  posts: postReducer,
  logout: logoutReducer,
  isLogged: isLoggedReducer,
  search: searchReducer
});

export default rootReducer;
