import React, { useState } from "react";
import "./App.styles";

import NavBar from "./components/navbar.component/NavBar";
import PathVisualizer from "./components/path.visualizer.component/PathVisualizer";
import { PathVisualizerContainer } from "./App.styles";

const App = () => {
  const [aStar, setAStar] = useState(false);

  const loadVisualization = () => {
    setAStar(true);
  };

  return (
    <>
      <NavBar runAlgorithm={loadVisualization} />
      <PathVisualizerContainer>
        <PathVisualizer runAStar={aStar} />
      </PathVisualizerContainer>
    </>
  );
};

export default App;
