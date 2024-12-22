import React from "react";

export default function Remaining({ leftTodos }) {
  return (
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
  );
}
