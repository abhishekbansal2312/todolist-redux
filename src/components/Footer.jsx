import React from "react";
import { colors, statuses } from "../slices/filterSlice";
import { markAllCompleted, clearCompleted } from "../slices/todoSlice";
import { useDispatch } from "react-redux";

import { filterColor, filterStatus } from "../slices/filterSlice";

export default function Footer({ selectedStatus, selectedColor, todos }) {
  const dispatch = useDispatch();
  const leftTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className=" py-6 border-t-2 ">
      <div className="flex flex-wrap justify-between gap-8 ">
        <div className="flex flex-col gap-4 items-center">
          <h4 className="text-lg font-semibold text-gray-800">Actions</h4>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 w-full  "
            onClick={() => dispatch(markAllCompleted(todos))}
          >
            Mark All Completed
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 w-full"
            onClick={() => dispatch(clearCompleted(todos))}
          >
            Clear Completed
          </button>
        </div>

        <div className="flex flex-col items-center">
          {leftTodos.length > 0 ? (
            <div className="text-center">
              <p className="text-gray-700 font-semibold text-lg">
                Remaining Todos:
              </p>
              <div className="text-gray-900 ">{leftTodos.length} item left</div>
            </div>
          ) : (
            <div className="text-green-700 text-lg">All Done!</div>
          )}
        </div>

        <div className="flex flex-col items-start">
          <h4 className="text-lg font-semibold text-gray-800">
            Filter by Status
          </h4>

          <div className="py-2 flex flex-col gap-2 items-start">
            {statuses.map((status) => (
              <button
                key={status}
                value={status}
                onClick={() => dispatch(filterStatus(status))}
                className={` rounded-md ${
                  selectedStatus === status && "bg-blue-600 text-white p-1"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold text-gray-800">
            Filter by Color
          </h4>
          <div className="flex gap-2 flex-col flex-wrap justify-center">
            {colors.map((color) => (
              <label
                key={color}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={color}
                  checked={selectedColor === color}
                  onChange={() =>
                    dispatch(filterColor(selectedColor === color ? "" : color))
                  }
                  className="appearance-none w-5 h-5 border border-gray-400 rounded-sm checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                />
                <span
                  className="w-6 h-4 rounded-sm border-gray-400"
                  style={{ backgroundColor: color }}
                ></span>

                <span className="text-gray-800">
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
