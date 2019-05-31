import React, { Component } from "react";
import "./App.css";
import Listview from "./components/ListView";
import { Provider } from "react-redux";

import { createStore } from "redux";
import trainsReducer from "./reducers";

const store = createStore(
  trainsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Listview />
        </div>
      </Provider>
    );
  }
}

console.log(store.getState(), "this");
