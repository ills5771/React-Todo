import React from "react";

const Todo = props => {
  console.log("toggle clicked");
  return (
    <div className="todo">
      <h4 onClick={() => props.toggleTodo(props.todo.id)}>{props.todo.task}</h4>
    </div>
  );
};

export default Todo;
