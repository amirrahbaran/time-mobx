import React, { Component } from "react";
import store from "./store";
import {observer} from "mobx-react"
import "./App.css";

@observer
class App extends Component {
  render() {
    return <div className="App">
      <h1>{store.time.toLocaleTimeString()}</h1>
      <button onClick={()=>store.pauseClock()}>Pause</button>
    </div>;
  }
}

export default App;
