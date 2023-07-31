import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

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
        <div>count: {this.state.count} </div>
        <button onClick={this.decrementCount}>- 1</button>
        <button onClick={this.incrementCount}>+ 1</button>
      </div>
    );
  }
}
