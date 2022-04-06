import React, { useState } from "react";

export const AddList = ({ onAdd, toggleShowForm }) => {
  const [todo, setTodo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!todo) {
      alert("Please add a todo");
      return;
    }

    onAdd(todo);
    setTodo("");
  };
  return (
    <div className="form-wrapper">
      <h2>Enter a new todo</h2>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter you todo list"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};
