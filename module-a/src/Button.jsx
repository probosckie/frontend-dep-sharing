// module-a/src/Button.js
import React from "react";

export const Button = ({ children }) => {
  return (
    <button style={{ padding: "8px", backgroundColor: "blue", color: "white" }}>
      {children}
    </button>
  );
};
