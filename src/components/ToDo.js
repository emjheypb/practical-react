import React from "react";

export default (props) => (
  <div
    style={{
      textDecoration: props.todo.done ? "line-through" : "none",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <input
      type="checkbox"
      checked={props.todo.done}
      onChange={props.toggleDone}
    />
    <div style={{ color: "red" }} onClick={props.delete}>
      [✖]
    </div>{" "}
    {props.todo.todo}
  </div>
);
