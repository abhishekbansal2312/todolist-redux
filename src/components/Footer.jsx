import React from "react";

import Actions from "./footer/Actions";
import FilterByStatus from "./footer/FilterByStatus";
import FIlterByColor from "./footer/FilterByColor";
import Remaining from "./footer/Remaining";

export default function Footer() {
  return (
    <div className=" py-6 border-t-2 ">
      <div className="flex flex-wrap justify-between gap-8 ">
        <Actions />
        <Remaining />
        <FilterByStatus />
        <FIlterByColor />
      </div>
    </div>
  );
}
