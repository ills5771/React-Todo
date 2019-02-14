import React from "react";

const TodoForm = props => {
  return (
    <div onSubmit={props.addTodo} className="todo-form">
      <form className="form-group">
        <input
          type="text"
          name="task"
          placeholder="Add task"
          value={props.task}
          onChange={props.handleChanges}
        />
        <button type="submit" className="btn btn-dark btn-sm">
          Add
        </button>
        <button type="submit" className="btn btn-dark btn-sm">
          Clear
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
