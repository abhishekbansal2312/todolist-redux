import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import {
  addTodo,
  removeTodo,
  toggleCompleted,
  changeColor,
  markAllCompleted,
  clearCompleted,
} from "../slices/todoSlice";
import {
  colors,
  statuses,
  selectColor,
  selectStatus,
  filterColor,
  filterStatus,
} from "../slices/filterSlice";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function TodoPage() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todolist);
  const selectedColor = useSelector(selectColor);
  const selectedStatus = useSelector(selectStatus);

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleFilterColorChange = (color) => {
    dispatch(filterColor(color));
  };

  const handleFilterStatusChange = (status) => {
    dispatch(filterStatus(status));
  };

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

  const leftTodos = todos.filter((todo) => !todo.completed);
  console.log(leftTodos);

  return (
    <div className="bg-gray-100 p-6 max-h-screen">
      <div className="max-w-4xl min-h-screen mx-auto bg-white p-6 pt-2 flex justify-between flex-col">
        <div>
          <TodoForm onAddTodo={handleAddTodo} />

          <TodoList
            todos={filteredTodos()}
            removeTodo={(id) => dispatch(removeTodo(id))}
            changeColor={(id, color) => dispatch(changeColor(id, color))}
            toggleCompleted={(id) => dispatch(toggleCompleted(id))}
            dispatch={dispatch}
            colors={colors}
          />
        </div>

        <div>
          <Footer
            selectedStatus={selectedStatus}
            handleFilterStatusChange={handleFilterStatusChange}
            statuses={statuses}
            selectedColor={selectedColor}
            handleFilterColorChange={handleFilterColorChange}
            colors={colors}
            leftTodos={leftTodos.length}
            changeColor={changeColor}
            markAllCompleted={() => dispatch(markAllCompleted(todos))}
            clearCompleted={() => dispatch(clearCompleted(todos))}
          />
        </div>
      </div>
    </div>
  );
}
