import React, { useState } from "react";
import { addTodo } from "../slices/todoSlice";
import { useDispatch } from "react-redux";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    dispatch(addTodo({ title: todo }));
    setTodo("");
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
    </form>
  );
}
