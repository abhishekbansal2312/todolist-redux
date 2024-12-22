import React from "react";
import { filterStatus, selectStatus, statuses } from "../../slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FilterByStatus() {
  const dispatch = useDispatch();
  const selectedStatus = useSelector(selectStatus);
  return (
    <div className="flex flex-col items-start">
      <h4 className="text-lg font-semibold text-gray-800">Filter by Status</h4>

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
  );
}
