import logo from "./logo.svg";
import "./App.css";

const Body = (props) => (
  <div>
    <p className="App-intro">{props.text}</p>
    <p className="App-intro">{props.text2}</p>
  </div>
);

function Header({ title, num, thing, snacks, trick, command, rest }) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>{JSON.stringify(thing)}</div>
      <div>{snacks}</div>
      <p className="App-title">
        {command()}
        <br />
        {num} {snacks[0]} {title} {thing.name} for {trick()}
      </p>
      <p>{rest}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

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
      <Body text="I am the body..." text2="I am number 2..." />
    </div>
  );
}

export default App;
