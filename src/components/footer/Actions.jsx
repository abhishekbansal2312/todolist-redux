import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { markAllCompleted, clearCompleted } from "../../slices/todoSlice";
export default function Actions() {
  const dispatch = useDispatch();
  const [markCompleted, setMarkCompleted] = useState(true);
  return (
    <div className="flex flex-col gap-4 items-center">
      <h4 className="text-lg font-semibold text-gray-800">Actions</h4>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 w-full  "
        onClick={() => {
          dispatch(markAllCompleted(markCompleted));
          setMarkCompleted((prevState) => !prevState);
        }}
      >
        {markCompleted ? " Mark All Completed" : " Mark All Incompleted"}
      </button>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 w-full"
        onClick={() => dispatch(clearCompleted())}
      >
        Remove Completed
      </button>
    </div>
  );
}
