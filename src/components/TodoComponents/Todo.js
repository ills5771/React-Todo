import React from "react";

const Todo = props => {
  return (
    <div className="todo">
      <h4>{props.todo.task}</h4>
    </div>
  );
};

export default Todo;
