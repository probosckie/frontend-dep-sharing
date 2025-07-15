// module-b/src/App.js
import React from "react";
import { Button } from "module-a";

export const App = () => {
  return (
    <>
      <p>hello from module B</p>
      <Button>Hello from Module A</Button>
    </>
  );
};
