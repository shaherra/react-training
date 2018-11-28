import React, { Component } from "react";
import Currency from "./currency";

export default class CurrencyHolder extends Component {
  render() {
    //   array
    const currencies = [
      { name: "btc", price: 2500 },
      { name: "xrp", price: 299 }
    ];
    return (
      <div>
        {currencies.map((eachcurrency, index) => {
          return <Currency currency={eachcurrency} key={index} />;
        })}
      </div>
    );
  }
}
