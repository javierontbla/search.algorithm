import React from "react";

import { Nav, Logo, NavButton } from "./NavBar.styles";

const NavBar = ({ runAStar, random, restart, restartVisualizer }) => {
  return (
    <>
      <Nav>
        <Logo>Pathfinder Visualizer</Logo>
        <NavButton onClick={runAStar}>A* Algorithm</NavButton>
        <NavButton onClick={random}>random</NavButton>
        <NavButton>Mazes</NavButton>
        <NavButton>Algorithms</NavButton>
        {restart ? (
          <NavButton onClick={restartVisualizer}>Restart</NavButton>
        ) : null}
      </Nav>
    </>
  );
};

export default NavBar;
