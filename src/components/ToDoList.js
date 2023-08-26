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
    filter: "",
  };

  addToDo = (todo) => {
    this.setState({
      todoList: [...this.state.todoList, todo], // new to do + copy of curent todoList
    });
  };

  toggleDone = (id) => {
    this.setState({
      todoList: this.state.todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, // keep same values of unmentioned properties
            done: !todo.done,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  toggleDoneAll = (isDone) => {
    this.setState({
      todoList: this.state.todoList.map((todo) => {
        return { ...todo, done: isDone };
      }),
    });
  };

  toggleFilter = (condition) => {
    this.setState({
      filter: condition,
    });
  };

  delete = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((todo) => todo.id !== id),
    });
  };

  deleteCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter((todo) => !todo.done),
    });
  };

  render() {
    let filtered = [];
    if (this.state.filter === "") {
      filtered = this.state.todoList;
    } else if (this.state.filter === "active") {
      filtered = this.state.todoList.filter((todo) => !todo.done);
    } else {
      filtered = this.state.todoList.filter((todo) => todo.done);
    }

    return (
      <div>
        <ToDoHeader
          todoList={this.state.todoList}
          toggleFilter={this.toggleFilter}
        />
        <ToDoForm onSubmit={this.addToDo} />
        <br />
        {filtered.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            toggleDone={() => this.toggleDone(todo.id)}
            delete={() => this.delete(todo.id)}
          />
        ))}
        <div>
          {!this.state.todoList.length ? (
            <div>Nothing To Do Here</div>
          ) : (
            <div>
              <br />
              <button onClick={() => this.toggleDoneAll(true)}>
                Check All
              </button>{" "}
              <button onClick={() => this.toggleDoneAll(false)}>
                Uncheck All
              </button>
            </div>
          )}
          {this.state.todoList.some((todo) => todo.done) ? (
            <button onClick={this.deleteCompleted}>
              Remove Completed ToDos
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}
