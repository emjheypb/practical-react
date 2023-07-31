import { Component } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import { Counter } from "./components/Counter";

class App extends Component {
  state = {
    visible: false,
  };

  toggleVisibile = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const buttonText = this.state.visible
      ? "HIDE THE PUPPIES"
      : "SHOW ME THE PUPPIES";

    const body = this.state.visible ? (
      <ImageSlider />
    ) : (
      <Counter initialCount={0} />
    );

    return (
      <div className="App">
        {body}
        <button onClick={this.toggleVisibile}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
