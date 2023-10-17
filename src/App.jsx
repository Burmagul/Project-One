import React from "react";
import Render from "./component/Render";
import "./App.css" ;
import People  from "./connect/Massiv";

const App = () => {
  return (
    <div className="Cart">
      <Render props={People} />
    </div>
  );
};

export default App;
