import React from "react";

export default class MyForm extends React.Component {
  state = {
    gender: "girl",
    adjective: "",
    name: "",
    description: "",
    mine: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* uncontrolled field - when you don't store the input values in states */}
        Type:
        <input
          id="girl"
          type="radio"
          name="gender"
          value="girl"
          onChange={this.handleChange}
          defaultChecked
        />
        <label htmlFor="girl">Girl</label>
        <input
          id="boy"
          type="radio"
          name="gender"
          value="boy"
          onChange={this.handleChange}
        />
        <label htmlFor="boy">Boy</label>
        <br />
        <input
          value={this.state.name}
          name="name"
          placeholder="John Smith"
          onChange={this.handleChange}
        />
        <br />
        <textarea
          value={this.state.description}
          name="description"
          placeholder="Something about John Smith"
          onChange={this.handleChange}
        ></textarea>
        <br />
        {"Adjective: "}
        <select
          name="adjective"
          onChange={this.handleChange}
          value={this.state.title}
        >
          <option></option>
          <option>good</option>
          <option>bad</option>
        </select>
        <br />
        {"Mine: "}
        <input
          name="mine"
          type="checkbox"
          checked={this.state.mine}
          onChange={this.handleChange}
        />
        {this.state.name === "" ? (
          <br />
        ) : (
          <div>
            <p className={this.state.name === "" ? "hidden" : ""}>
              {this.state.name}
              {this.state.description === ""
                ? " "
                : ", " + this.state.description + ", "}
              is {this.state.mine ? "my " : "a "}
              {this.state.adjective + " "}
              {this.state.gender}.
            </p>
            <button type="submit">SUBMIT</button>
          </div>
        )}
      </form>
    );
  }
}
