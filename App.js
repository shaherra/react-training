import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import CurrencyHolder from "./components/currencyHolder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          headerText="Hello Shaherra"
          imgLink="https://500.co/wp-content/uploads/2016/03/Call-Levels-Logo.png"
        />
        <CurrencyHolder />
      </div>
    );
  }
}

export default App;
