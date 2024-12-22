import React from "react";

import { selectIncompleteTasks } from "../slices/todoSlice";
import { useSelector } from "react-redux";

import Actions from "./footer/Actions";
import FilterByStatus from "./footer/FilterByStatus";
import FIlterByColor from "./footer/FilterByColor";
import Remaining from "./footer/Remaining";

export default function Footer({ selectedStatus, selectedColor, todos }) {
  const leftTodos = useSelector(selectIncompleteTasks);
  return (
    <div className=" py-6 border-t-2 ">
      <div className="flex flex-wrap justify-between gap-8 ">
        <Actions />
        <Remaining leftTodos={leftTodos} />
        <FilterByStatus selectedStatus={selectedStatus} />
        <FIlterByColor selectedColor={selectedColor} />
      </div>
    </div>
  );
}
