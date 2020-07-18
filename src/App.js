import React from "react";
import "./App.styles";

import Grid from "./components/grid.component/Grid";
import { AppContainer } from "./App.styles";

const App = () => {
  return (
    <>
      <AppContainer>
        <Grid />
      </AppContainer>
    </>
  );
};

export default App;
