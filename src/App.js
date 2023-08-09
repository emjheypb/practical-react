import { Component } from "react";
import "./App.css";
import FetchRandomUser from "./components/FetchRandomUser";

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
        <FetchRandomUser />
      </div>
    );
  }
}

export default App;
