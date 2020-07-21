import React from "react";
import "./App.styles";

import Grid from "./components/grid.component/Grid";
import Legend from "./components/legend.component/Legend";
import { AppContainer } from "./App.styles";

const App = () => {
  return (
    <>
      <AppContainer>
        <Grid />
        <Legend />
      </AppContainer>
    </>
  );
};

export default App;
