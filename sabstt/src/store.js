import { createStore } from "redux";
import reducer from "./reducers";

const initialState = { name: "Bob" };

// const middleware =
//   [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];

const store = createStore(
  reducer, // create store object passing in reducer
  initialState, // pre-existing data
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
