import React from "react";

import { Nav, Logo, NavButton } from "./NavBar.styles";

const NavBar = ({
  executeAStar,
  randomObstacles,
  restartingDOM,
  restartBtn,
}) => {
  return (
    <>
      <Nav>
        <Logo>Pathfinder Visualizer</Logo>
        <NavButton onClick={executeAStar}>A* Algorithm</NavButton>
        <NavButton onClick={randomObstacles}>random</NavButton>
        {restartBtn ? (
          <NavButton onClick={restartingDOM}>Restart</NavButton>
        ) : null}
      </Nav>
    </>
  );
};

export default NavBar;
