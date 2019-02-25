import React, { Component } from "react";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return <div className="App">{document.writeln(store.time.toLocaleTimeString())}</div>;
  }
}

export default App;
