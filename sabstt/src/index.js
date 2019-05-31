import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// function reducer(state = {}, action) {
//   switch (action.type) {
//     case "updateState":
//       return action.payload;
//   }
//   return state;
// }

// const store = createStore(
//   reducer, // create store object passing in reducer
//   { name: "Bob" }, // pre-existing data
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //dev tools
// );

// console.log(store.getState());

// const action = {
//   type: "updateState",
//   payload: {
//     name: "John"
//   }
// };

// store.dispatch(action);

ReactDOM.render(<App />, document.getElementById("root"));

// 1.  Create a fresh react project to use X
// 2.  Add redux with a single reducer.
// 3.  Create a single page app with a ListView or similar component.
// 4.  Load the rail results in the supplied results.json file, parse the json to get tickets , ticket prices, depart times , number of legs etc
// 5.  Load the parsed results into some object in the redux store and display as a list of available tickets with useful info (price, time etc)
// 6.  Add a button that will toggle the tickets display by price/time.
