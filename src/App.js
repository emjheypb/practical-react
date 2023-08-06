import { Component } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";
import MyForm from "./components/MyForm";

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
    return (
      <div className="App">
        <MyForm />
      </div>
    );
  }
}

export default App;
