import React, { Component } from "react";
import "./App.css";
import Listview from "./components/Listview";
import { Provider } from "react-redux";
import store from "./store";

import { connect } from "react-redux";

export default class App extends Component {
  render() {
    console.log(this.props, "props");
    return (
      <Provider store={store}>
        <div>
          <Listview />
        </div>
      </Provider>
    );
  }
}
