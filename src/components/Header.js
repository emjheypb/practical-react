import React from "react";
import logo from "../logo.svg";

export class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{JSON.stringify(this.props.thing)}</div>
        <div>{this.props.snacks}</div>
        <p className="App-title">
          {this.props.command()}
          <br />
          {this.props.num} {this.props.snacks[0]} {this.props.title}{" "}
          {this.props.thing.name} for {this.props.trick()}
        </p>
        <p>{this.props.rest}</p>
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
}
