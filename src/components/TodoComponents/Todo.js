import React from "react";

const Todo = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.toggleCompleted(props.todo.id)}
    >
      <h4>{props.todo.task}</h4>
    </div>
  );
};

export default Todo;
