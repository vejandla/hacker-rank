import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./components/Category";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Category />
      </div>
    );
  }
}

export default App;
