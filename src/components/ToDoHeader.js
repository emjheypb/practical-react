import React from "react";

export default class ToDoHeader extends React.Component {
  render() {
    return (
      <div>
        <h1>TO DO LIST</h1>
        <h4>
          All ({this.props.all}) | Active ({this.props.active}) | Done (
          {this.props.done})
        </h4>
      </div>
    );
  }
}
