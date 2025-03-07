"use client";

import React from "react";

const LoadingSpinner = ({ size = 40, borderWidth = 3 }) => {
  return (
    <div
      className="relative"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div
        className="absolute border-t-transparent rounded-full animate-spin"
        style={{
          width: "100%",
          height: "100%",
          borderStyle: "solid",
          borderColor: "rgba(255, 255, 255, 0.8)",
          borderTopColor: "transparent",
          borderWidth: `${borderWidth}px`,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
