import React from "react";

const TodoForm = props => {
  return (
    <div className="todo-form">
      <form className="form-group">
        <input
          type="text"
          name="task"
          placeholder="Add task"
          value={props.newTask}
          onChange={props.inputChangeHandler}
        />
        <button
          // onClick={props.addTodo}
          type="submit"
          className="btn btn-dark btn-sm"
        >
          Add
        </button>
        <button
          // onClick={props.clearTodos}
          type="submit"
          className="btn btn-dark btn-sm"
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
