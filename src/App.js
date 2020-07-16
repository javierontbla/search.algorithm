import React from "react";
import "./App.styles";

import NavBar from "./components/navbar.component/NavBar";
import PathVisualizer from "./components/a.star.path.visualizer.component/PathVisualizer";
import { PathVisualizerContainer } from "./App.styles";

const App = () => {
  return (
    <>
      <PathVisualizerContainer>
        <PathVisualizer />
      </PathVisualizerContainer>
    </>
  );
};

export default App;
