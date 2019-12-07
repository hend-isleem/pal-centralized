import postReducer from "./postReducer";
import loginReducer from "./loginReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  posts: postReducer,
  user: loginReducer
});

export default rootReducer;
