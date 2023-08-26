import React from "react";

export default (props) => (
  <div style={{ textDecoration: props.todo.done ? "line-through" : "none" }}>
    <input
      type="checkbox"
      value={props.todo.done}
      onChange={props.toggleDone}
    />
    <div style={{ display: "inline", color: "red" }}>[✖]</div> {props.todo.todo}
  </div>
);
