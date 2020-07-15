import React, { useState } from "react";

import { Nav, Logo } from "./NavBar.styles";

const NavBar = ({ runAlgorithm }) => {
  return (
    <>
      <Nav expand="lg">
        <Logo>Pathfinding Visualizer</Logo>
        <button onClick={() => runAlgorithm()}>A* Algorithm</button>
      </Nav>
    </>
  );
};

export default NavBar;
