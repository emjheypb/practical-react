import "./App.css";
import { Header } from "./components/Header";
import Body, { Body2, Body3 } from "./components/Body";

function App() {
  const down = () => "laying down!";
  const speak = () => "barking!";

  function sleep(n) {
    return "Sleeping for " + n + " hours...";
  }

  return (
    <div className="App">
      <Header
        title="cookies for"
        num={5}
        thing={{ name: "Raven", type: "Dog", size: 3 }}
        snacks={["beef", "pork", "venison"]}
        trick={down}
        command={() => "DOWN"}
        rest={sleep(3)}
      />
      <Header
        title={"cookies for"}
        num={3}
        thing={{ name: "Zed", type: "Dog", size: 1 }}
        snacks={["beef", "pork", "chicken"]}
        trick={speak}
        command={() => "SPEAK"}
        rest={sleep(5)}
      />
      <Body text="I am the body..." text2="I am number one..." />
      <Body2 />
      <Body3 />
    </div>
  );
}

export default App;
