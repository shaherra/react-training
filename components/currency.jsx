import React, { Component } from "react";

export default class Currency extends Component {
  render() {
    const { currency } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <p>{currency.name}</p>
        <p>{currency.price}</p>
        <p>
          <button>Refresh</button>
        </p>
      </div>
    );
  }
}
