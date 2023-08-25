import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0,
    team: this.props.team,
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.team}: {this.state.count}{" "}
        </div>
        <button onClick={this.decrementCount}>- 1</button>
        <button onClick={this.incrementCount}>+ 1</button>
      </div>
    );
  }
}
