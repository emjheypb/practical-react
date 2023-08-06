import { Component } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
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

  render() {
    const buttonText = this.state.visible ? "HIDE COUNTER" : "SHOW COUNTER";

    const body = this.state.visible ? (
      <ImageSlider />
    ) : (
      <Counter initialCount={0} />
    );

    return (
      <div className="App">
        {/* {body} */}
        <div className={this.state.visible ? "visible" : "hidden"}>
          <Counter initialCount={0} />
        </div>
        <button onClick={this.toggleVisibile}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
