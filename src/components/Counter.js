import React from "react";

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        {this.props.team}
        <div>
          <button onClick={this.props.decrement}>- 1</button> {this.props.count}{" "}
          <button onClick={this.props.increment}>+ 1</button>
        </div>
      </div>
    );
  }
}
