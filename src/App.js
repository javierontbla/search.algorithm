import React from "react";
import "./App.styles";

import NavBar from "./components/navbar.component/NavBar";
import PathVisualizer from "./components/path.visualizer.component/PathVisualizer";
import { PathVisualizerContainer } from "./App.styles";

const App = () => {
  return (
    <>
      <NavBar />
      <PathVisualizerContainer>
        <PathVisualizer />
      </PathVisualizerContainer>
    </>
  );
};

export default App;
