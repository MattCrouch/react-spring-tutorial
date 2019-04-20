import React, { Component } from "react";
import RatingsCard from "./RatingsCard";
import "./App.css";
import image from "./image.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RatingsCard image={image} />
      </div>
    );
  }
}

export default App;
