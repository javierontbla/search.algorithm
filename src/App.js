import React, { useState } from "react";
import "./App.styles";

import PathVisualizer from "./components/a.star.path.visualizer.component/PathVisualizer";
import Grid from "./components/grid.component/Grid";
import { AppContainer } from "./App.styles";

const App = () => {
  const [currentNode, setCurrentNode] = useState(false);

  const updateGrid = (node) => {
    setCurrentNode(true);
  };

  return (
    <>
      <button onClick={() => updateGrid()}>test</button>
      <AppContainer>
        <PathVisualizer updateGrid={() => updateGrid()} />
        <Grid currentNode={currentNode} />
      </AppContainer>
    </>
  );
};

export default App;
