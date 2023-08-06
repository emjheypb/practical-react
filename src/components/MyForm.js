import React from "react";

export default class MyForm extends React.Component {
  state = {
    title: "",
    name: "",
    description: "",
    isDead: false,
  };

  setTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  setName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  setDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  setIsDead = (event) => {
    this.setState({
      isDead: event.target.checked,
    });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div>
          {/* uncontrolled field - when you don't store the input values in states */}
          <select onChange={this.setTitle}>
            <option></option>
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
            <option>Dr.</option>
          </select>
          <br />
          <input placeholder="John Smith" onChange={this.setName} />
          <br />
          <textarea
            placeholder="Something about John Smith"
            onChange={this.setDescription}
          ></textarea>
          <br />
          Is Dead?{" "}
          <input
            type="checkbox"
            checked={this.state.isDead}
            onChange={this.setIsDead}
          />
          {this.state.name === "" ? (
            <br />
          ) : (
            <div>
              <p className={this.state.name === "" ? "hidden" : ""}>
                {this.state.title} {this.state.name}
                {this.state.description == ""
                  ? " "
                  : ", " + this.state.description + ", "}
                is {!this.state.isDead ? "not" : ""} dead.
              </p>
              <button onClick={this.handleSubmit}>SUBMIT</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
