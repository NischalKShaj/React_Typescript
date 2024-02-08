import React from "react";
import ReusableComponentList from "./ReusableComponet";
import "./App.css";

const App: React.FC = () => {
  const data = [
    { id: 1, name: "Nischal K Shaj", email: "nischalkshaj5@gmail.com" },
    { id: 2, name: "Vishnu", email: "vishnu@gmail.com" },
  ];
  return (
    <div className="list-container">
      <h1>Reusable Component Workout</h1>
      <ReusableComponentList data={data} />
    </div>
  );
};

export default App;
