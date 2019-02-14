import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";

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
      completed: false
    };
  }
  addTodo = ev => {
    ev.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      task: ""
      // id: "",
      // completed: false
    });
  };
  toggleCompleted = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };
  clearCompleted = ev => {
    ev.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
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
        <TodoList
          toggleCompleted={this.toggleCompleted}
          todos={this.state.todos}
        />
        <TodoForm
          id={this.state.id}
          completed={this.state.completed}
          task={this.state.task}
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
