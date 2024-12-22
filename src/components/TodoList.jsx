import React from "react";
import { removeTodo, toggleCompleted, changeColor } from "../slices/todoSlice";
import { useDispatch } from "react-redux";
import { FiEdit } from "react-icons/fi";

export default function TodoList({ todos, colors }) {
  const dispatch = useDispatch();
  // const handleEditTodo = (todo) => {
  //   dispatch(removeTodo({ id: todo.id, title: todo.title }));
  // };
  return (
    <ul className=" ">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-white p-2 border-t-2"
        >
          <input
            type="checkbox"
            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            onChange={() => dispatch(toggleCompleted({ id: todo.id }))}
            checked={todo.completed}
          />

          <span
            className={`flex-1 ml-4 ${
              todo.completed ? "line-through text-gray-500" : "text-gray-700"
            }`}
          >
            {todo.title}
          </span>

          <span
            className={`w-6 h-6 rounded-full border`}
            style={{ backgroundColor: todo.color }}
          ></span>

          <select
            className="ml-4 px-2 py-1 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) =>
              dispatch(changeColor({ id: todo.id, color: e.target.value }))
            }
            value={todo.color || ""}
          >
            <option value="" disabled>
              Select Color
            </option>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </option>
            ))}
          </select>
          {/* <button
            className="ml-4 px-3 py-1  focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={handleEditTodo(todo)}
          >
            <FiEdit className="w-5 h-5" />
          </button> */}
          <button
            className=" px-3 py-1  focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={() => dispatch(removeTodo({ id: todo.id }))}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}
