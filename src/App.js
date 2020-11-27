import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 data-ns-test={"project-name"}>My first project</h1>
      <p data-ns-test={"project-description"}>
        <ol>
          <li> js projects</li>
          <li> react projects</li>
          <li> js and react mock interviews</li>
          </ol>
      </p>
    </div>
  );
}
