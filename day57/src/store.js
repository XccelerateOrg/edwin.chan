import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

//create a rootstate?

export const store = createStore(rootReducer, applyMiddleware(thunk));
