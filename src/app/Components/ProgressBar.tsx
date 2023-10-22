import React from "react";
import { ProgressProps } from "../types/types";

const ProgressBar = ({ percent }: ProgressProps) => {
  return (
    <div className="mx-2">
      <div className=" text-lg font-medium dark:text-white ">Progress</div>

      <div className="w-full h-4 mb-12  bg-inputBackgrounds rounded-full ">
        <div
          className="h-4 bg-progress-bar rounded-full "
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
