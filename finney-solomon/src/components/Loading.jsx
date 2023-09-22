import { Progress } from "@nextui-org/react";
import React from "react";

export const Loading = ({ timer = 0 }) => {
  return (
    <div className="justify-center">
      <Progress aria-label="Loading..." value={timer} className="max-w-md" />
    </div>
  );
};
