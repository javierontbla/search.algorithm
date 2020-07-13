import React from "react";

import { Nav, Logo } from "./NavBar.styles";

const NavBar = () => {
  return (
    <>
      <Nav expand="lg">
        <Logo>Pathfinding Visualizer</Logo>
      </Nav>
    </>
  );
};

export default NavBar;
