import React, { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

import { selectFilteredTodos } from "../slices/filterSlice";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function TodoPage() {
  const [editIndex, setEditIndex] = useState(-1);
  const todos = useSelector(selectFilteredTodos);
  return (
    <div className="bg-gray-100 p-6 ">
      <div className="max-w-4xl min-h-screen mx-auto bg-white p-6 pt-2 flex justify-between flex-col">
        <div>
          <TodoForm editIndex={editIndex} />

          <TodoList
            setEditIndex={setEditIndex}
            editIndex={editIndex}
            todos={todos}
          />
        </div>

        <div>
          <Footer todos={todos} />
        </div>
      </div>
    </div>
  );
}
