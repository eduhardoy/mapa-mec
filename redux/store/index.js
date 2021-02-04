import { createStore, applyMiddleware } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

const initialState = {};
const middlewares = [thunk];

// create a makeStore function
const makeStore = (preloadState,options) =>
  createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middlewares))
  );

// export an assembled wrapper
export const wrapper = createWrapper(makeStore);
