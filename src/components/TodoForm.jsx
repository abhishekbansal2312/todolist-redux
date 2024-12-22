import React, { useState } from "react";
import { addTodo, updateTodos } from "../slices/todoSlice";
import { useDispatch } from "react-redux";

export default function TodoForm({ editIndex, editTitle, closeModal }) {
  const [todo, setTodo] = useState(editIndex !== -1 ? editTitle || "" : "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    if (editIndex !== -1) {
      dispatch(updateTodos({ id: editIndex, title: todo }));
    } else {
      dispatch(addTodo({ title: todo }));
    }

    setTodo("");
    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between bg-white rounded-lg p-4"
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 rounded-sm focus:outline-none focus:border-none"
      />
      <button
        type="submit"
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {editIndex !== -1 ? "Update" : "Add"}
      </button>
    </form>
  );
}
