import { Progress } from "@nextui-org/react";
import React from "react";

export const Loading = ({ timer = 0 }) => {
  return (
    <div style={{


      width: "100vw",

    }}>
      <h3 style={{ textAlign: "center", marginTop: " 30vh",padding:"2em" }}>
        Welcome to Finney's Portfolio
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto"
        }}
      >
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md"
        /> </div>


    </div>

  );
};
