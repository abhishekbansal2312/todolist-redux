import React from "react";
import { useSelector } from "react-redux";
import { selectIncompleteTasks } from "../../slices/todoSlice";

export default function Remaining() {
  const leftTodos = useSelector(selectIncompleteTasks);
  console.log(leftTodos);

  return (
    <div className="flex flex-col items-center">
      {leftTodos > 0 ? (
        <div className="text-center">
          <p className="text-gray-700 font-semibold text-lg">
            Remaining Todos:
          </p>
          <div className="text-gray-900 ">{leftTodos} item left</div>
        </div>
      ) : (
        <div className="text-green-700 text-lg">All Done!</div>
      )}
    </div>
  );
}
