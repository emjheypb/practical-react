import React from "react";

export default class ToDoHeader extends React.Component {
  render() {
    return (
      <div>
        <h1>TO DO LIST</h1>
        <h4>
          <div style={{ display: "inline" }}>All ({this.props.all})</div> |{" "}
          <div style={{ display: "inline" }}>Active ({this.props.active})</div>{" "}
          | <div style={{ display: "inline" }}>Done ({this.props.done})</div>
        </h4>
      </div>
    );
  }
}
