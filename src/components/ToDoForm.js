import React from "react";
import shortid from "shortid";

export default class ToDoForm extends React.Component {
  state = {
    todo: "",
  };

  handleChange = (event) => {
    this.setState((state) => ({
      [event.target.name]: event.target.value,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault(); // prevent refresh
    this.props.onSubmit({
      id: shortid.generate(),
      todo: this.state.todo,
      done: false,
    });
    this.setState((state) => ({
      todo: "",
    }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Something ToDo"
          onChange={this.handleChange}
          value={this.state.todo}
          name="todo"
          autoFocus
          autoComplete="false"
        />
        <button type="submit"> + </button>
      </form>
    );
  }
}
