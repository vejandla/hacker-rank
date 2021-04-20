import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryContainer from "./components/CategoryContainer";
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <CategoryContainer />
      </div>
    );
  }
}

export default App;
