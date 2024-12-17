import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

import { colors, selectColor, selectStatus } from "../slices/filterSlice";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function TodoPage() {
  const todos = useSelector((state) => state.todos.todolist);
  const selectedColor = useSelector(selectColor);
  const selectedStatus = useSelector(selectStatus);

  const filteredTodos = () => {
    let filtered = [...todos];

    if (selectedStatus === "completed") {
      filtered = filtered.filter((todo) => todo.completed);
    } else if (selectedStatus === "incompleted") {
      filtered = filtered.filter((todo) => !todo.completed);
    }

    if (selectedColor) {
      filtered = filtered.filter((todo) => todo.color === selectedColor);
    }

    return filtered;
  };

  return (
    <div className="bg-gray-100 p-6 ">
      <div className="max-w-4xl min-h-screen mx-auto bg-white p-6 pt-2 flex justify-between flex-col">
        <div>
          <TodoForm />

          <TodoList todos={filteredTodos()} colors={colors} />
        </div>

        <div>
          <Footer
            selectedStatus={selectedStatus}
            todos={todos}
            selectedColor={selectedColor}
          />
        </div>
      </div>
    </div>
  );
}
