import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      // inline styles
      <div
        style={{
          backgroundColor: "#0087a8",
          display: "flex",
          flexDirection: "row"
        }}
      >
        {/* calling props */}
        <img src={this.props.imgLink} width={128} height={64} />
        <div>
          <p>{this.props.headerText}</p>
        </div>
      </div>
    );
  }
}
