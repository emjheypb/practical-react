import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoHeader from "./ToDoHeader";
import ToDo from "./ToDo";

/*
ToDoMVC
    1. Add todo
    2. Display todo
    3. Complete todo
    4. Show number of active todos
    5. Filter all/active/done
    6. Delete todo
    7. Delete all complete todos
        7.1. Only show button if at least 1 is complete
    8. Button to toggle all on/off
*/

export default class ToDoList extends React.Component {
  state = {
    todoList: [],
  };

  addToDo = (todo) => {
    this.setState(
      {
        todoList: [...this.state.todoList, todo], // new to do + copy of curent todoList
      },
      () => {
        console.log(this.state.todoList);
      }
    );
  };

  render() {
    return (
      <div>
        <ToDoHeader all={this.state.todoList.length} active={0} done={0} />
        <ToDoForm onSubmit={this.addToDo} />
        <br />
        {!this.state.todoList.length ? (
          <div>Nothing To Do Here</div>
        ) : (
          this.state.todoList.map((todo) => (
            <ToDo key={todo.id} todo={todo.todo} />
          ))
        )}
      </div>
    );
  }
}
