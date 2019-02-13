import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      task: "",
      id: "",
      completed: ""
    };
  }
  addTodo = ev => {
    ev.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: this.state.completed
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      task: "",
      id: "",
      completed: ""
    });
  };
  handleChanges = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  render() {
    return (
      <div className="app">
        <TodoList todos={this.state.todos} />
        <TodoForm
          id={this.state.id}
          completed={this.state.completed}
          task={this.state.task}
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
