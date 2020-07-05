import { combineReducers } from "redux";
import { linkReducer } from "./link";

export const rootReducer = combineReducers({
  linkStore: linkReducer
});
