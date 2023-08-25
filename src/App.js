import { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    visible: false,
  };

  toggleVisibile = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  state = {
    count: 0,
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
      <div className="App">
        <Counter
          count={this.state.count}
          increment={this.incrementCount}
          decrement={this.decrementCount}
          team="Original"
        />
        <Counter
          count={this.state.count}
          increment={this.incrementCount}
          decrement={this.decrementCount}
          team="Clone 1"
        />
        <Counter
          count={this.state.count}
          increment={this.incrementCount}
          decrement={this.decrementCount}
          team="Clone 2"
        />
      </div>
    );
  }
}

export default App;
