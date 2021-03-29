import { createStore, combineReducers } from "redux";
import UserReducer from "./reducers/users";
import currentUserReducer from "./reducers/currentUser";
import langReducer from "./reducers/lang";

const reducers = combineReducers({
  users: UserReducer,
  currentUser: currentUserReducer,
  lang: langReducer,
});

export const store = createStore(reducers);
