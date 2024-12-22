import React from "react";
import { filterColor, colors, selectColor } from "../../slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FilterByColor() {
  const selectedColor = useSelector(selectColor);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-lg font-semibold text-gray-800">Filter by Color</h4>
      <div className="flex gap-2 flex-col flex-wrap justify-center">
        {colors.map((color) => (
          <label key={color} className="flex items-center gap-2 cursor-pointer">
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
  );
}
