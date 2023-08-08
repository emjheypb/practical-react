import { Component } from "react";
import "./App.css";
import ValidationForm from "./components/ValidationForm";

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
        <ValidationForm />
      </div>
    );
  }
}

export default App;
