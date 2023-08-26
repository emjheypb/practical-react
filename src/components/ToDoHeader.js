import React from "react";

export default class ToDoHeader extends React.Component {
  render() {
    return (
      <div>
        <h1>TO DO LIST</h1>
        <h4>
          <div
            style={{ display: "inline" }}
            onClick={() => this.props.toggleFilter("")}
          >
            All ({this.props.todoList.length})
          </div>{" "}
          |{" "}
          <div
            style={{ display: "inline" }}
            onClick={() => this.props.toggleFilter("active")}
          >
            Active ({this.props.todoList.filter((todo) => !todo.done).length})
          </div>{" "}
          |{" "}
          <div
            style={{ display: "inline" }}
            onClick={() => this.props.toggleFilter("done")}
          >
            Complete ({this.props.todoList.filter((todo) => todo.done).length})
          </div>
        </h4>
      </div>
    );
  }
}
